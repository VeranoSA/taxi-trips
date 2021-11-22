module.exports = function FruitBasket(pool){

    async function addTrip(routeId, taxiId, qty) {
		const insertTripSQL = `insert into trip (routename_id, taxi_id, qty) values ($1, $2, $3)`;
		const result = await pool.query(insertTripSQL, [routeId, taxiId, qty])
		if (result.rows.length > 0) {
			return result.rows[0];
		}
	}

    //totaltripcount
    async function totalTripCount(trip){
        const count = await pool.query('SELECT qty FROM trip WHERE routename_id = $1', [trip]);
            return count.rows[0].qty
     }
    //find all region,
async function findAllRegions(town){
   return await (await pool.query('SELECT * FROM region Where name = $1', [town])).rows;
}

   //find all the taxis
   async function findTaxisForRegion(town){
    return await (await pool.query('SELECT * FROM routename Where city = $1', [town])).rows;
    
}
   //find all trips by regnumber
   async function findTripsByRegNumber(trip){
        return await (await pool.query('SELECT * FROM taxi Where regnumber = $1', [trip])).rows;
}
    //find all trips by region
async function findTripsByRegion(trip){
    const alltrips = await pool.query('SELECT regnumber FROM taxi WHERE routename_id = $1', [trip]);
        return alltrips.rows[0].regnumber
    
} 

//show the total income per taxi
async function findTotalIncomePerTaxi(taxi){
    const sum = await pool.query('SELECT qty FROM trip WHERE qty = $1', [taxi]);
        return sum.rows[0].quantity
 }

 async function findTotalIncome(taxiId) {
    const selecttripSQL = `select *, qty * price as total 
        from trip 
            join routename on routename_id = trip.routename_id
        where taxi_id = $1`;
    const result = await pool.query(selecttripSQL, [taxiId])
    if (result.rowCount > 0) {
        return result.rows;
    }
}

return {
    addTrip,
    totalTripCount,
    findTaxisForRegion,
    findAllRegions,
    findTripsByRegion,
    findTripsByRegNumber,
    findTotalIncomePerTaxi,
    findTotalIncome
}
}