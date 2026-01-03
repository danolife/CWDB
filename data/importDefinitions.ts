import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import dotenv from 'dotenv';
import { definitionsTable } from '../src/domains/db/schema.ts';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

dotenv.config({
  path: ['.env.local', '.env.production', '.env.development', '.env'],
});

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle({ client: pool });

  try {
    const definitionsFiles = await listFiles(/^definitions_\d+\.txt$/);

    for (const file of definitionsFiles) {
      await processFileByLines(file, async (lines) => {
        await db.insert(definitionsTable).values(
          lines.map((line) => {
            const [word, ...definition] = line.split(':');
            return { word, definition: definition.join(':') };
          }),
        );
        console.log(`Inserted ${lines.length} definitions from ${file}`);
      });
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    // Close the database connection
    await pool.end();
    console.log('Database connection closed.');
  }
}

// Run the script
main();

async function listFiles(pattern: RegExp): Promise<string[]> {
  const dataDir = './data';

  const files = await readdir(dataDir);

  return files
    .filter((file) => pattern.test(file))
    .map((file) => join(dataDir, file));
}

async function processFileByLines(
  filePath: string,
  onBatch: (lines: string[]) => Promise<void>,
): Promise<void> {
  const fileStream = createReadStream(filePath, { encoding: 'utf-8' });
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let batch: string[] = [];

  for await (const line of rl) {
    batch.push(line);

    if (batch.length === 100) {
      await onBatch(batch);
      batch = [];
    }
  }

  // Process remaining lines if any
  if (batch.length > 0) {
    await onBatch(batch);
  }
}
