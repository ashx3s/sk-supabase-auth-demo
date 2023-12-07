import { createClient } from '@supabase/supabase-js';

console.log('Running');

let SUPABASE_URL = 'https://sojumsbpvpzgkcavdcbm.supabase.co';
let SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvanVtc2JwdnB6Z2tjYXZkY2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4OTU5MDIsImV4cCI6MjAxNzQ3MTkwMn0.69OmUCH2O2DT440VC_M1uzUuSsj8bFmAEaQCfVePWyQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let { user, error } = await supabase.auth.signUp({
	email: 'ashlynnknox+testThree@gmail.com',
	password: 'scoobysnacks'
});

console.log(user);
console.log(error);
