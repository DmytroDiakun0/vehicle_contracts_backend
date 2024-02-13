const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const v1ContractRoutes = require('./v1/routes/contractRoutes')
const v1CustomerRoutes = require('./v1/routes/customerRoutes')
const v1VehicleRoutes = require('./v1/routes/vehicleRoutes')

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/contracts', v1ContractRoutes);
app.use('/api/v1/customers', v1CustomerRoutes);
app.use('/api/v1/vehicles', v1VehicleRoutes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});