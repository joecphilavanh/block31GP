const express = require('express'); 
const app = express();

app.get('/api/v1/pets', (req, res) => {
    const allPets = petsData;
    console.log(`Number of pets: ${allPets.length}`);

    res.send(allPets);
  });
  app.get('/api/v1/pets/:name', (req, res) => {
    const petName = req.params.name;
    const pet = petsData.find(pet => pet.name === petName);
    res.send(pet);
  });
  app.get('/api/v1/pets/owner/:ownerName', (req, res) => {
    const ownerName = req.params.ownerName;
    const ownerPets = petsData.filter(pet => pet.owner === ownerName);
      res.json(ownerPets);
  });


  const PORT = 8080;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));