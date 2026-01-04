import {
  createFileRoute,
  ErrorComponent,
  Link,
  useNavigate,
} from '@tanstack/react-router';
import { ArrowRightIcon } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group.tsx';
import {
  RouterOutput,
  trpcClient,
} from '@/domains/tanstack-query/root-provider.tsx';
import { normalizePattern } from '@/lib/utils.ts';
import { useEffect, useRef } from 'react';

export const Route = createFileRoute('/words/{-$word}')({
  component: RouteComponent,
  loader: ({ params }) => {
    if (!params.word) {
      return [];
    }

    if (params.word.includes('*')) {
      return trpcClient.words.pattern.query(params.word);
    }

    return trpcClient.words.get.query(params.word);
  },
  errorComponent: ({ error }) => {
    if (error.message === 'NOT_FOUND') {
      return <div>This word does not exist</div>;
    }
    return <ErrorComponent error={error} />;
  },
});

function RouteComponent() {
  const { word } = Route.useParams();
  const result = Route.useLoaderData();

  if (Array.isArray(result)) {
    return <Pattern pattern={word ?? ''} result={result} />;
  }

  return <SpecificWord {...result} />;
}

const Pattern = ({
  result,
  pattern,
}: {
  pattern: string;
  result: RouterOutput['words']['pattern'];
}) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.select();
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({
            to: '/words/{-$word}',
            params: { word: normalizePattern(e.currentTarget.word.value) },
          });
        }}
      >
        <InputGroup>
          <InputGroupInput ref={inputRef} name="word" defaultValue={pattern} />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              type="submit"
              autoCapitalize="characters"
              autoCorrect="false"
            >
              <ArrowRightIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </form>
      {!pattern ? (
        <>
          <p>
            Utilisez les astérsc (*) pour les lettres que vous ne connaissez pas
          </p>
        </>
      ) : (
        <>
          <p>{pattern.length} lettres</p>
          {result.length === 0 && (
            <p className="mt-4">No words found for pattern "{pattern}"</p>
          )}
          <ul>
            {result.map(({ word }) => (
              <li key={word}>
                <Link to={`/words/{-$word}`} params={{ word }}>
                  {word}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const SpecificWord = ({ word, definitions }: RouterOutput['words']['get']) => {
  return (
    <div>
      <h1 className="text-xl">{word}</h1>
      <h2 className="text-l">Definitions</h2>
      <ul>
        {definitions.map((def) => (
          <li key={def.id}>{def.definition}</li>
        ))}
      </ul>
    </div>
  );
};
