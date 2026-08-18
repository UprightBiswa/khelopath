insert into users (id, name, age, sport, state, district, city)
values ('KP-DEMO-USER-001', 'Demo Athlete', 21, 'Cycling', 'Assam', 'Kamrup Metropolitan', 'Guwahati')
on conflict (id) do nothing;

insert into opportunities (id, title, sport, state, district, description, organisation_type, eligibility, application_url, status)
values
  (
    'KP-DEMO-OPP-001',
    'Guwahati SAI Cycling Centre',
    'Cycling',
    'Assam',
    'Kamrup Metropolitan',
    'Government-supported training opportunity for cycling athletes in and around Guwahati.',
    'Training Centre',
    'Age 14-25, cycling interest or experience, Assam-based applicant, athlete profile required.',
    null,
    'open'
  ),
  (
    'KP-DEMO-OPP-002',
    'Assam State Sports Academy Cycling Programme',
    'Cycling',
    'Assam',
    null,
    'State-level cycling training and athlete development pathway.',
    'Sports Academy',
    'Cycling applicants from Assam with basic sports achievement record preferred.',
    null,
    'open'
  )
on conflict (id) do nothing;

