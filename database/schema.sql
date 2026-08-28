-- Reference schema for Neon PostgreSQL.
-- Prisma schema in web/prisma/schema.prisma is the source of truth.

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

create table if not exists sports (
  id text primary key,
  name text unique not null,
  icon text not null,
  created_at timestamptz default now()
);

create table if not exists locations (
  id text primary key,
  state text not null,
  district text not null,
  city text not null,
  created_at timestamptz default now(),
  unique (state, district, city)
);

create table if not exists sports_centres (
  id text primary key,
  name text not null,
  sport_id text references sports(id),
  state text not null,
  district text not null,
  city text not null,
  latitude double precision not null,
  longitude double precision not null,
  type text not null,
  image text
);

create table if not exists opportunities (
  id text primary key,
  title text not null,
  sport text not null,
  sport_id text references sports(id),
  state text not null,
  district text,
  city text,
  description text not null,
  organisation_type text not null,
  eligibility text not null,
  documents text[] not null default '{}',
  next_steps text[] not null default '{}',
  image text,
  match_score integer not null default 90,
  application_url text,
  status text not null default 'open'
);

create table if not exists eligibility_rules (
  id text primary key,
  opportunity_id text references opportunities(id),
  label text not null,
  rule text not null,
  plain_text text not null
);

create table if not exists applications (
  id text primary key,
  user_id text references users(id),
  opportunity_id text references opportunities(id),
  status text not null,
  submitted_at timestamptz default now()
);

create table if not exists application_events (
  id text primary key,
  application_id text references applications(id),
  label text not null,
  description text not null,
  created_at timestamptz default now()
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

create table if not exists grievance_events (
  id text primary key,
  grievance_id text references grievances(id),
  label text not null,
  description text not null,
  created_at timestamptz default now()
);
