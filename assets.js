/*
 * Asset list for "Start new test". One entry per machine.
 *   unit         asset number, as you'd type it (required)
 *   serial       serial number or VIN
 *   description  how it reads on the record sheet
 *   category     heading it's listed under in the picker
 *   make, model, area   extra detail shown in the picker and used for matching
 *   machineId    optional: force the criteria-sheet machine, or 'other' for one that isn't on the sheet
 *                (its brake limits are then entered in the app, and remembered for next time)
 * The app matches each asset to its brake limits from the serial prefix (FDB, SPD, MSY, ATY, JRP) or the model.
 * Source: site asset list (photo, 10 Nov 2026) plus the Comiskey trucks sheet.
 */
window.BTR_ASSETS = [
  // CAT 793D rear dumps
  { unit: 'RD8',  category: 'CAT 793D Rear Dumps', make: 'CAT', model: '793D', area: 'Coal',     serial: 'FDB00982', description: 'CAT 793D Rear Dump' },
  { unit: 'RD9',  category: 'CAT 793D Rear Dumps', make: 'CAT', model: '793D', area: 'Prestrip', serial: 'FDB00983', description: 'CAT 793D Rear Dump' },
  { unit: 'RD18', category: 'CAT 793D Rear Dumps', make: 'CAT', model: '793D', area: 'Prestrip', serial: 'FDB01426', description: 'CAT 793D Rear Dump' },
  { unit: 'RD19', category: 'CAT 793D Rear Dumps', make: 'CAT', model: '793D', area: 'Prestrip', serial: 'FDB01427', description: 'CAT 793D Rear Dump' },
  { unit: 'RD20', category: 'CAT 793D Rear Dumps', make: 'CAT', model: '793D', area: 'Prestrip', serial: 'FDB01431', description: 'CAT 793D Rear Dump' },
  { unit: 'RD21', category: 'CAT 793D Rear Dumps', make: 'CAT', model: '793D', area: 'Coal',     serial: 'FDB01433', description: 'CAT 793D Rear Dump' },
  { unit: 'RD22', category: 'CAT 793D Rear Dumps', make: 'CAT', model: '793D', area: 'Coal',     serial: 'FDB01449', description: 'CAT 793D Rear Dump' },

  // Kress belly dumps
  { unit: 'CH22', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CII',  area: 'Coal', serial: 'HND-M109', description: 'Kress CH200 CII Belly Dump' },
  { unit: 'CH25', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CIII', area: 'Coal', serial: 'HBB-M135', description: 'Kress CH200 CIII Belly Dump' },
  { unit: 'CH26', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CIII', area: 'Coal', serial: 'HBB-M136', description: 'Kress CH200 CIII Belly Dump' },
  { unit: 'CH27', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CIII', area: 'Coal', serial: 'HBB-M137', description: 'Kress CH200 CIII Belly Dump' },
  { unit: 'CH29', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CIII', area: 'Coal', serial: 'HBB-M139', description: 'Kress CH200 CIII Belly Dump' },
  { unit: 'CH30', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CIII', area: 'Coal', serial: 'HBB-M140', description: 'Kress CH200 CIII Belly Dump' },
  { unit: 'CH31', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CIII', area: 'Coal', serial: 'HBB-M141', description: 'Kress CH200 CIII Belly Dump' },
  { unit: 'CH32', category: 'Kress Belly Dumps', make: 'Kress', model: 'CH200 CII',  area: 'Coal', serial: 'HBB-M142', description: 'Kress CH200 CII Belly Dump' },

  // Water trucks
  { unit: 'WT8',  category: 'Water Trucks', make: 'CAT', model: '785D-WT', area: 'Coal',     serial: 'MSY00534', description: 'CAT 785D Water Truck' },
  { unit: 'WT9',  category: 'Water Trucks', make: 'CAT', model: '789D-WT', area: 'Coal',     serial: 'SPD00751', description: 'CAT 789D Water Truck' },
  { unit: 'WT10', category: 'Water Trucks', make: 'CAT', model: '789D-WT', area: 'Coal',     serial: 'SPD00752', description: 'CAT 789D Water Truck' },
  { unit: 'WT14', category: 'Water Trucks', make: 'CAT', model: '789D-WT', area: 'Prestrip', serial: 'SPD00796', description: 'CAT 789D Water Truck' },
  { unit: 'WT15', category: 'Water Trucks', make: 'CAT', model: '789D-WT', area: 'Prestrip', serial: 'SPD00815', description: 'CAT 789D Water Truck' },
  { unit: 'WT16', category: 'Water Trucks', make: 'CAT', model: '789D-WT', area: 'Prestrip', serial: 'SPD00814', description: 'CAT 789D Water Truck' },
  { unit: 'WT17', category: 'Water Trucks', make: 'CAT', model: '789D-WT', area: 'Prestrip', serial: 'SPD00813', description: 'CAT 789D Water Truck' },

  // Floats and trailers
  { unit: 'FLT3', category: 'Floats & Trailers', make: 'CAT', model: '793C Float', serial: 'ATY01045', description: 'CAT 793C Float' },
  { unit: 'FLT5', category: 'Floats & Trailers', make: 'CAT', model: '793D Float', serial: 'FDB00735', description: 'CAT 793D Float', machineId: 'float-793d-fdb' },
  { unit: 'FLT6', category: 'Floats & Trailers', make: 'CAT', model: '777F Float', serial: 'JRP03032', description: 'CAT 777F Float' },
  { unit: 'FLT 3 TRHY1', category: 'Floats & Trailers', make: 'Mine Ranger', model: 'MR410', serial: '410002', description: 'Mine Ranger MR410 Trailer', machineId: 'other', custom: { type: 'Trailer', model: 'Mine Ranger MR410' } },
  { unit: 'FLT 5 TRHY2', category: 'Floats & Trailers', make: 'Tow Haul', model: 'RGSOLPM', serial: '9387', description: 'Tow Haul RGSOLPM Trailer', machineId: 'other', custom: { type: 'Trailer', model: 'Tow Haul RGSOLPM' } },

  // Comiskey trucks (contractor)
  { unit: 'RD805', category: 'Comiskey Trucks', make: 'CAT', model: '793F', serial: 'SSP00125', description: 'CAT 793F Rear Dump', machineId: 'other', custom: { type: 'Rear Dump', model: 'CAT 793F' } },
  { unit: 'RD806', category: 'Comiskey Trucks', make: 'CAT', model: '793F', serial: 'SSP00184', description: 'CAT 793F Rear Dump', machineId: 'other', custom: { type: 'Rear Dump', model: 'CAT 793F' } },
  { unit: 'RD807', category: 'Comiskey Trucks', make: 'CAT', model: '793F', serial: 'SSP00197', description: 'CAT 793F Rear Dump', machineId: 'other', custom: { type: 'Rear Dump', model: 'CAT 793F' } },
  { unit: 'RD808', category: 'Comiskey Trucks', make: 'CAT', model: '793F', serial: 'SSP00204', description: 'CAT 793F Rear Dump', machineId: 'other', custom: { type: 'Rear Dump', model: 'CAT 793F' } },
  { unit: 'RD809', category: 'Comiskey Trucks', make: 'CAT', model: '793F', serial: 'SSP00246', description: 'CAT 793F Rear Dump', machineId: 'other', custom: { type: 'Rear Dump', model: 'CAT 793F' } },
  { unit: 'RD811', category: 'Comiskey Trucks', make: 'CAT', model: '793D', serial: 'FDB00841', description: 'CAT 793D Rear Dump' },
  { unit: 'RD812', category: 'Comiskey Trucks', make: 'CAT', model: '793D', serial: 'FDB00278', description: 'CAT 793D Rear Dump' },
];
