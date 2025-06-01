# CastPress Podcast Platform – SvelteKit Pet Project

A full-stack podcast management platform built with **Svelte 5 (SvelteKit)**, **Bun**, **PostgreSQL**, and **Prisma ORM**. This is a pet project aimed at displaying and playing podcasts and displaying posts related to them.

It's also can be used with any other runtime - npm, yarn, pnpm.

## Getting Started

### 1. Install dependencies:

```bash
bun install
```

### 2. Ensure Docker is running, then start the PostgreSQL container:

```bash
docker-compose up -d
```

This will start a PostgreSQL instance defined in docker-compose.yml.

### 3. Create a .env file in the root of the project:

```bash
DATABASE_URL="postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@localhost:5432/{POSTGRES_DB}"
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

### 4: Generate Prisma Client

```bash
bun prisma generate
```

### 5. Set up the database:

```bash
bun prisma migrate dev --name init
bun run seed
```

### 6. Run the development server:

```bash
bun run dev
```

### 7. Build the project:

```bash
bun run build
```

### 8. Preview the project:

```bash
bun run preview
```

### 9. To explore your database with Prisma’s built-in tooling: you can use:

```bash
#Make sure your client is generated
bun prisma generate
```

```bash
bun prisma studio
```
