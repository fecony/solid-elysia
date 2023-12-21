FROM jarredsumner/bun:edge

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN bun install

EXPOSE 8080

CMD bun run dev