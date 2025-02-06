interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(value: number): number;
}

const myComputer: Computer = {
  id: 765,
  brand: "Dell",
  ram: 4,
  storage: 500,
  upgradeRam(value) {
    this.ram += value;
    return this.ram;
  },
};

console.log(myComputer.ram); // 4
myComputer.upgradeRam(12); // Here I have upgraded ram by using the upgradeRam() method.
console.log(myComputer.ram); // 16
