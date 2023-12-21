import { Title } from '@solidjs/meta';
import { Show, createResource, createSignal } from 'solid-js';

import { eden } from '~/lib/eden';
import { Solid } from '~/components/tech/solid';
import { Elysia } from '~/components/tech/elysia';
import { TbHeartHandshake, TbLoader2 } from 'solid-icons/tb';

export default function Home() {
  const [loading, setLoading] = createSignal(false);
  const [name, setName] = createSignal('');

  const [hello] = createResource(async () => {
    const { data } = await eden.api[''].get();
    return data;
  });

  const sendWave = async () => {
    setLoading(true);

    await eden.api['']
      .post({ name: name() })
      .then(({ data, error }) => {
        alert(data);
      })
      .finally(() => {
        setLoading(false);
        setName('');
      });
  };

  return (
    <section class='mx-auto flex min-h-screen flex-col items-center justify-center py-4 md:py-8'>
      <main class='container flex max-w-xl flex-1 flex-col justify-center items-center py-14'>
        <div class='flex h-full flex-col justify-center'>
          <Title>{'Solid <> Elysia'}</Title>

          <div
            class='bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-md p-4'
            role='alert'
          >
            <span class='font-bold'>Info!</span> Basic example of SolidJS app
            and Elysia to handle api requests
          </div>

          <h3 class='text-2xl mt-6'>ElysiaJS + SolidStart</h3>

          <div class='flex mt-2 mb-10'>
            <span class='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded'>
              SolidJS
            </span>

            <span class='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded'>
              EysiaJS
            </span>
          </div>

          <div class='bg-white border border-gray-200 rounded-md p-4 md:p-5 space-y-5'>
            <span class='font-bold'>Data from Elysia:</span> {hello()}
            <form onSubmit={sendWave} class='flex flex-row space-x-2'>
              <input
                value={name()}
                onInput={(e) => {
                  setName(e.currentTarget.value);
                }}
                type='text'
                class='py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
                placeholder='type your name'
              />

              <button
                disabled={name().length === 0 || loading()}
                type='submit'
                class='py-3 px-4 inline-flex disabled:cursor-not-allowed items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50'
              >
                <Show
                  when={loading()}
                  fallback={<TbHeartHandshake aria-label='Send hello' />}
                >
                  <TbLoader2 class='animate-spin' aria-label='Send hello' />
                </Show>
              </button>
            </form>
          </div>

          <div class='mt-5 space-y-5 flex flex-col'>
            <Elysia />

            <Solid />
          </div>
        </div>
      </main>
    </section>
  );
}
