## sv

```
npx sv create sql1
npm run dev

```

- create github empty repo
- follow steps to git init etc
- connect to vercel, storage , follow steps for supabase, etc

```
vercel link
vercel env pull .env.development.local
```



## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## types

[supabase types for your project](https://supabase.com/docs/guides/api/rest/generating-types)

```
npm i supabase@">=1.8.1" --save-dev
npx supabase login (log in with github and follow the guidance)
npx supabase gen types typescript --project-id "xhuyamsoabffrqjbhwsx" --schema public > database.types.ts


```

```
supabaseClient.ts :

import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private'
import type { Database } from '../../database.types'

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)

```