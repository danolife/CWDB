import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowRightIcon } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group.tsx';
import { trpcClient } from '@/domains/tanstack-query/root-provider.tsx';
import { normalizePattern } from '@/lib/utils.ts';
import { useEffect, useRef } from 'react';

export const Route = createFileRoute('/words/{-$word}')({
  component: RouteComponent,
  loader: ({ params }) =>
    params.word ? trpcClient.words.pattern.query(params.word) : null,
});

function RouteComponent() {
  const { word } = Route.useParams();
  const result = Route.useLoaderData();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(word);

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
          <InputGroupInput ref={inputRef} name="word" defaultValue={word} />
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
      <ul>
        {result?.map(({ word }) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
