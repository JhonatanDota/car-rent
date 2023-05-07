interface Brand {
  [key: string]: string;
}

export const BRANDS: Brand = {
  CHEVROLET: "Chevrolet",
  NISSAN: "Nissan",
  CITROEN: "Citroen",
  AUDI: "Audi",
  RENAULT: "Renault",
  FIAT: "Fiat",
  PEUGEOT: "Peugeot",
  FORD: "Ford",
  HYUNDAI: "Hyundai",
  BMW: "BMW",
};

interface Fuel {
  [key: string]: string;
}

export const FUEL_TYPES: Fuel = {
  FLEX: "Flex",
  GASOLINE: "Gasolina",
  ETHANOL: "Etanol",
};

interface Transmission {
  [key: string]: string;
}

export const CAR_TRANSMITIONS: Transmission = {
  MANUAL: "Manual",
  AUTOMATIC: "Automático",
};
