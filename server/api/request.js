const handTools = [
  "Screwdrivers",
  "Philips-head",
  "Slotted",
  "Star",
  "Wrenches",
  "Hammers",
  "Pliers",
  "Hex Keys",
  "Spanners",
  "Tyre Lever",
  "Lifting Jack",
  "Tyre Air Compressors",
  "Utility Knif",
  "Hood Light",
  "Measurement Tape",
  "Flexible funnel",
  "Vacuum pump",
];

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const data = handTools.filter((item) => {
    return item.toLowerCase().startsWith(query.search.toLowerCase());
  });
  return {
    res: data,
  };
});
