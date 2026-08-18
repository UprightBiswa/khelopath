-- Planned Neon PostgreSQL schema. Prisma will become the source of truth once connected.

create table if not exists users (
  id text primary key,
  name text not null,
  age integer not null,
  sport text not null,
  state text not null,
  district text not null,
  city text not null,
  created_at timestamptz default now()
);

create table if not exists opportunities (
  id text primary key,
  title text not null,
  sport text not null,
  state text not null,
  district text,
  description text not null,
  organisation_type text not null,
  eligibility text not null,
  application_url text,
  status text not null default 'open'
);

create table if not exists applications (
  id text primary key,
  user_id text references users(id),
  opportunity_id text references opportunities(id),
  status text not null,
  submitted_at timestamptz default now()
);

create table if not exists grievances (
  id text primary key,
  user_id text references users(id),
  application_id text references applications(id),
  category text not null,
  description text not null,
  status text not null,
  assigned_to text,
  created_at timestamptz default now()
);

