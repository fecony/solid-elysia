FROM jarredsumner/bun:edge

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN bun install --production

ENV NODE_ENV production

EXPOSE 8080

CMD bun run dev