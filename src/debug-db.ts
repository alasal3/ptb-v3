
// Load env vars
import 'dotenv/config';
// If dotenv is not installed, we might need to manually set process.env or rely on nextjs loading it if we run via next.
// But npx tsx might not load .env.local automatically. 
// Let's hardcode the keys for this specific debug script to be sure, or attempt to load them.
// Safest is to hardcode them here since I know them from the user prompt, to rule out env issues.
// But I should try to use the module first.

process.env.NEXT_PUBLIC_SUPABASE_URL = "https://gkepkqimbktyzfcflrrr.supabase.co";
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "sb_publishable_b9tTkeJ2hpN1CkOUrqn3vw_QtFApVmM";

import { getBuildingById, getBuildings } from './lib/api';

async function main() {
    console.log("--- DEBUG START ---");

    // 1. Fetch ALL buildings to see what IDs exist
    console.log("Fetching all buildings...");
    const buildings = await getBuildings();
    console.log(`Found ${buildings.length} buildings.`);
    if (buildings.length > 0) {
        buildings.forEach(b => console.log(` - ID: ${b.id} (Type: ${typeof b.id}), Name: ${b.name}`));
    } else {
        console.log("No buildings found.");
    }

    // 2. Try to fetch ID '1'
    console.log("\nFetching ID '1'...");
    const b1 = await getBuildingById("1");
    console.log("Result for '1':", b1 ? "Found" : "Null");

    // 3. Try to fetch ID 1 (number) just in case my api cast it weirdly, though api takes string.

    console.log("--- DEBUG END ---");
}

main();
