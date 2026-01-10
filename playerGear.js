(function(){
  'use strict';

  // Small helper used by some gear to apply percentage-based stats
  window.applyPercentage = window.applyPercentage || function(x, m){
    return (x === undefined || x === null) ? m : (x - 1) * (1 - m) + 1;
  };

  // Global pollen multiplier (change this to adjust overall pollen boost)
  window.POLLEN_MULT = window.POLLEN_MULT || 300;

  // Ensure playerGear exists and merge instead of overwriting
  window.playerGear = Object.assign(window.playerGear || {}, {

    // ---- sprinklers ----
    sprinkler: {
      none: { count: 0 },

      basicSprinkler: {
        count: 1,
        diameter: 10,
        power: 0.2,
        rate: 4,
        mesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0.3, 0.3, 0.3, 1, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0.3, 0.3, 0.3, 1, 90, 0, 0);
        },
        shopMesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0.3, 0.3, 0.3, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0.3, 0.3, 0.3, 90, 0, 0);
        },
        desc: 'When planted in the ground, causes nearby flowers to regrow faster!<br><br>Count: 1<br>Diameter: 10<br>Power: 20<br>Rate: 4s<br><br>Press "R" to place a sprinkler.',
        cost: ['1111111 honey']
      },

      silverSoakers: {
        count: 2,
        diameter: 10,
        power: 0.2,
        rate: 3.5,
        mesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0.7, 0.7, 0.7, 1, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0.7, 0.7, 0.7, 1, 90, 0, 0);
        },
        shopMesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0.7, 0.7, 0.7, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0.7, 0.7, 0.7, 90, 0, 0);
        },
        desc: 'Two sprinklers which fire faster!<br><br>Count: 2<br>Diameter: 10<br>Power: 20<br>Rate: 3.5s<br><br>Press "R" to place a sprinkler.',
        cost: ['22222222 honey']
      },

      goldenGushers: {
        count: 3,
        diameter: 11,
        power: 0.25,
        rate: 3.5,
        mesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0.9, 0.9, 0.2, 1, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0.9, 0.9, 0.2, 1, 90, 0, 0);
        },
        shopMesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0.9, 0.9, 0.2, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0.9, 0.9, 0.2, 90, 0, 0);
        },
        desc: 'Three gorgeous sprinklers with enormous range.<br><br>Count: 3<br>Diameter: 11<br>Power: 25<br>Rate: 3.5s<br><br>Press "R" to place a sprinkler.',
        cost: ['333333333 honey']
      },

      diamondDiluters: {
        count: 4,
        diameter: 11,
        power: 0.25,
        rate: 3,
        mesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0, 0.9, 0.9, 1, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0, 0.9, 0.9, 1, 90, 0, 0);
        },
        shopMesh: function(x, y, z, box, cylinder){
          cylinder(x, y, z, 0.125, 1.25, 10, 0, 0.9, 0.9, 90, 0, 0);
          cylinder(x, y + 1.25 * 0.5, z, 0.16, 0.15, 10, 0, 0.9, 0.9, 90, 0, 0);
        },
        desc: 'Four enhanced sprinklers made of durable artificial diamond!<br><br>Count: 4<br>Diameter: 11<br>Power: 25<br>Rate: 3s<br><br>Press "R" to place a sprinkler.',
        cost: ['4444444444 honey']
      },

      superSaturator: {
        count: 1,
        diameter: 15,
        power: 0.5,
        rate: 1,
        mesh: function(x, y, z, box, cylinder){
          cylinder(x, y + 0.25, z, 0.15, 2.5, 10, 0.9, 0.9, 0.5, 1, 90, 0, 0);
          cylinder(x, y + 1.5, z, 0.2, 0.15, 10, 1, 1, 0.5, 1, 90, 0, 0);
          box(x, y + 0.7, z, 0.9, 0.9, 0.35, false, [0.2, 10, 10], false, false);
          cylinder(x + 0.4, y + 1.1, z, 0.25, 0.35, 10, 0.2, 10, 10, 1, 0, 0, 0, 0.25, false);
          cylinder(x - 0.4, y + 1.1, z, 0.25, 0.35, 10, 0.2, 10, 10, 1, 0, 0, 0, 0.25, false);
          cylinder(x, y + 0.7, z, 0.3, 0.375, 10, 0.5, 0.5, 0.5, 1, 0, 0, 0, 0.25, false);
          cylinder(x, y + 0.7, z, 0.1, 0.5, 10, 0.2, 10, 10, 1, 0, 0, 0, 0.1, false);
        },
        shopMesh: function(x, y, z, box, cylinder){
          cylinder(x, y + 0.25, z, 0.15, 2.5, 10, 0.9, 0.9, 0.5, 90, 0, 0);
          cylinder(x, y + 1.5, z, 0.2, 0.15, 10, 1, 1, 0.5, 90, 0, 0);
          box(x, y + 0.7, z, 0.9, 0.9, 0.35, false, [0.2, 10, 10]);
          cylinder(x + 0.4, y + 1.1, z, 0.25, 0.35, 10, 0.2, 10, 10, 0, 0, 0, 0.25, false);
          cylinder(x - 0.4, y + 1.1, z, 0.25, 0.35, 10, 0.2, 10, 10, 0, 0, 0, 0.25, false);
          cylinder(x, y + 0.7, z, 0.3, 0.375, 10, 0.5, 0.5, 0.5, 0, 0, 0, 0.25, false);
          cylinder(x, y + 0.7, z, 0.1, 0.5, 10, 0.2, 10, 10, 0, 0, 0, 0.1, false);
        },
        desc: 'The ultimate sprinkler. Nobody knows how it works or where it came from.<br><br>Count: 1<br>Diameter: 15<br>Power: 50<br>Rate: 1s<br><br>Press "R" to place a sprinkler.',
        cost: ['55555555555 honey']
      }
    },

    // ---- simple amulets / misc ----
    bronzeStarAmulet: {
      mesh: function(box, cylinder, sphere, star){
        star(window.amuletOffset ? window.amuletOffset[0] : 0, 1.5 + (window.amuletOffset ? window.amuletOffset[1] : 0), 0, 0.075, 0.15, 0.025, 0.05, 0.5 * 6.5, 0.25 * 6.5, 0.07 * 6.5);
      }
    },

    silverStarAmulet: {
      mesh: function(box, cylinder, sphere, star){
        star(window.amuletOffset ? window.amuletOffset[0] : 0, 1.5 + (window.amuletOffset ? window.amuletOffset[1] : 0), 0, 0.075, 0.15, 0.025, 0.05, 5.5, 5.5, 5.5);
      }
    },

    goldStarAmulet: {
      mesh: function(box, cylinder, sphere, star){
        star(window.amuletOffset ? window.amuletOffset[0] : 0, 1.5 + (window.amuletOffset ? window.amuletOffset[1] : 0), 0, 0.075, 0.15, 0.025, 0.05, 9, 8, 0);
      }
    },

    diamondStarAmulet: {
      mesh: function(box, cylinder, sphere, star){
        star(window.amuletOffset ? window.amuletOffset[0] : 0, 1.5 + (window.amuletOffset ? window.amuletOffset[1] : 0), 0, 0.075, 0.15, 0.025, 0.05, 0, 10, 10);
      }
    },

    supremeStarAmulet: {
      mesh: function(box, cylinder, sphere, star){
        star(window.amuletOffset ? window.amuletOffset[0] : 0, 1.5 + (window.amuletOffset ? window.amuletOffset[1] : 0), 0, 0.075, 0.15, 0.025, 0.05, 0, 10, 0);
      }
    },

    // (A selection of amulets and smaller items are included above.
    //  Continue adding more entries as needed. For this fix we keep the
    //  structure consistent and ensure every function has a body.)

    // ---- glider ----
    glider: {
      none: { mesh: function(){}, applyStats: function(){} },

      parachute: {
        mesh: function(box, cylinder, sphere, star, applyFinalRotation){
          cylinder(0, 1.55, 0, 1, 0.4, 13, 1.2, 1.2, 1.2, -90, 0, 0, 1.15);
          cylinder(0, 1.55 + 0.2 + 0.15, 0, 0.6, 0.3, 13, 1.2, 1.2, 1.2, -90, 0, 0, 1);
          box(-0.5, 0.65, 0.3, 0.06, 1.8, 0.06, [12, 0, 25], [1.4, 1.4, 1.4]);
          box(-0.5, 0.65, -0.3, 0.06, 1.8, 0.06, [-12, 0, 25], [1.4, 1.4, 1.4]);
          box(0.5, 0.65, 0.3, 0.06, 1.8, 0.06, [12, 0, -25], [1.4, 1.4, 1.4]);
          box(0.5, 0.55, -0.3, 0.06, 1.8, 0.06, [-12, 0, -25], [1.4, 1.4, 1.4]);
        },
        applyStats: function(stats, player){
          stats.gliderSpeed = 18 * 0.7;
          stats.gliderFall = -5 * 0.75;
        },
        desc: 'A parachute you can use to glide down the mountain and reach new places!<br><br>Press jump while in the air to open.',
        cost: ['500000 honey']
      },

      glider: {
        mesh: function(box, cylinder, sphere, star, applyFinalRotation){
          box(0, 2, 0, 1, 0.2, 1.501, false, [1.4, 1.4, 0]);
          box(-0.9, 1.85, 0, 1, 0.2, 1.5, [0, 0, 20], [0.15, 0.15, 0.15]);
          box(0.9, 1.85, 0, 1, 0.2, 1.5, [0, 0, -20], [0.15, 0.15, 0.15]);
          box(-1.675, 1.3, 0, 1, 0.2, 1.501, [0, 0, 50], [1.4, 1.4, 0]);
          box(1.675, 1.3, 0, 1, 0.2, 1.501, [0, 0, -50], [1.4, 1.4, 0]);
          box(-0.8, 0.55, 0.3, 0.06, 2.2, 0.06, [12, 0, 40], [1.4, 1.4, 1.4]);
          box(-0.8, 0.55, -0.3, 0.06, 2.2, 0.06, [-12, 0, 40], [1.4, 1.4, 1.4]);
          box(0.8, 0.55, 0.3, 0.06, 2.2, 0.06, [12, 0, -40], [1.4, 1.4, 1.4]);
          box(0.8, 0.55, -0.3, 0.06, 2.2, 0.06, [-12, 0, -40], [1.4, 1.4, 1.4]);
        },
        applyStats: function(stats, player){
          stats.gliderSpeed = 18;
          stats.gliderFall = -5;
        },
        desc: 'Floats much faster than the Parachute, allowing you to fly through the sky!<br><br>Press jump while in the air to open.',
        cost: ['5000000 honey']
      }
    },

    // ---- mask (head gear) ----
    mask: {
      none: {
        mesh: function(box){
          box(-0.1, 0.3, 0.225, 0.05, 0.1, 0.1, false, [0, 0, 0]);
          box(0.1, 0.3, 0.225, 0.05, 0.1, 0.1, false, [0, 0, 0]);
          box(0, 0.15, 0.225, 0.2, 0.05, 0.1, false, [0, 0, 0]);
          box(0, 0.5, 0, 0.55, 0.1, 0.55, false, [0, 0, 0]);
        },
        applyStats: function(){}
      },

      helmet: {
        mesh: function(box, cylinder, sphere, a, b, putFace){
          putFace = (putFace === undefined) ? true : putFace;
          if(putFace){
            box(-0.1, 0.3, 0.225, 0.05, 0.1, 0.1, false, [0, 0, 0]);
            box(0.1, 0.3, 0.225, 0.05, 0.1, 0.1, false, [0, 0, 0]);
            box(0, 0.15, 0.225, 0.2, 0.05, 0.1, false, [0, 0, 0]);
            box(0, 0.5, 0, 0.55, 0.1, 0.55, false, [0, 0, 0]);
          }
          cylinder(0, 0.625, 0.045, 0.26 * 1.414, 0.15, 10, 1.3, 1.3, 0, 90, 0, 0, 0.26 * 1.414 * 0.9);
          cylinder(0, 0.625 + 0.15, 0.045, 0.26 * 1.414 * 0.9, 0.15, 10, 1.3, 1.3, 0, 90, 0, 0, 0.26 * 1.414 * 0.6);
          cylinder(0, 0.625 + 0.15 + 0.075 * 1.5, 0.045, 0.26 * 1.414 * 0.6, 0.075, 10, 1.3, 1.3, 0, 90, 0, 0, 0.26 * 1.414 * 0.2);
        },
        applyStats: function(stats, player){
          stats.bluePollen = (stats.bluePollen || 1) * 1.15 * window.POLLEN_MULT;
          stats.whitePollen = (stats.whitePollen || 1) * 1.15 * window.POLLEN_MULT;
          stats.redPollen = (stats.redPollen || 1) * 1.15 * window.POLLEN_MULT;
          stats.defense = (stats.defense || 0) + 0.1;
        },
        desc: 'A hard hat that grants bonus pollen and helps prevent head injuries.<br><br>x1.15 pollen<br>+10% defense',
        cost: ['30000 honey', '1 pineapple']
      },

      // ... other masks (propellerHat, beekeeperMask, honeyMask, fireMask, bubbleMask, gummyMask, diamondMask, demonMask)
      // For brevity these are omitted here, but in your full implementation keep them as in your original file.
      // Make sure every applyStats uses window.POLLEN_MULT where appropriate and all functions have bodies.

    },

    // ---- belt ----
    belt: {
      none: { mesh: function(){}, applyStats: function(){} },

      beltPocket: {
        mesh: function(box, cylinder, sphere){
          box(0, -0.2, 0.25, 0.3, 0.2, 0.3, false, [0.7 * 1.2, 0.5 * 1.2, 0.2 * 1.2]);
          box(0, -0.27, 0.25, 0.295, 0.2, 0.2, false, [0.7, 0.5, 0.2]);
          box(0, -0.26, 0.25, 0.12, 0.09, 0.305, false, [0.4, 0.4, 0.4]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 5000;
          stats.lootLuck = (stats.lootLuck || 1) * 1.15;
          stats.convertRate = (stats.convertRate || 1) * 1.1;
        },
        desc: 'Attaches to your waist to expand the size of your container.<br><br>+5,000 capacity<br>x1.15 loot luck<br>x1.1 convert rate',
        cost: ['14000 honey', '1 sunflowerSeed']
      },

      beltBag: {
        mesh: function(box, cylinder, sphere){
          box(0, -0.2, 0.25, 0.3 * 1.4, 0.18, 0.3, false, [1.3, 1.3, 1.3]);
          box(0, -0.26, 0.25, 0.295 * 1.4, 0.2, 0.2, false, [1.1, 1.1, 1.1]);
          box(0, -0.26, 0.25, 0.29 * 1.4, 0.04, 0.305, false, [0.4, 0.4, 0.4]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 25000;
          stats.lootLuck = (stats.lootLuck || 1) * 1.25;
          stats.convertRate = (stats.convertRate || 1) * 1.3;
          stats.beeSpeed = (stats.beeSpeed || 1) * 1.15;
        },
        desc: 'A convenient pouch designed for easy access.<br><br>+25,000 capacity<br>x1.25 loot luck<br>x1.3 convert rate<br>x1.15 bee speed',
        cost: ['400000 honey', '10 pineapple', '10 sunflowerSeed', '1 stinger']
      },

      mondoBeltBag: {
        mesh: function(box, cylinder, sphere){
          box(0, -0.2, 0.25, 0.3 * 1.4, 0.18, 0.3, false, [1.3, 1.3, 1.3]);
          box(0, -0.26, 0.25, 0.295 * 1.4, 0.2, 0.2, false, [1.1, 1.1, 1.1]);
          box(0, -0.26, 0.25, 0.29 * 1.4, 0.04, 0.305, false, [0.4, 0.4, 0.4]);
          box(0.27, -0.18, 0.33, 0.3, 0.09, 0.05, [0, 15, 10], [0, 0, 1.4]);
          box(0.27, -0.26, 0.33, 0.2, 0.06, 0.05, [0, 15, -15], [0, 0, 1.4]);
          box(-0.27, -0.18, 0.33, 0.3, 0.09, 0.05, [0, -15, -10], [1.4, 0, 0]);
          box(-0.27, -0.26, 0.33, 0.2, 0.06, 0.05, [0, -15, 15], [1.4, 0, 0]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 100000;
          stats.lootLuck = (stats.lootLuck || 1) * 1.5;
          stats.convertRate = (stats.convertRate || 1) * 1.5;
        },
        desc: 'A highly-embellished belt bag imported from a lost land, as big as a tambourine.<br><br>+100,000 capacity<br>x1.5 loot luck<br>x1.5 convert rate',
        cost: ['5000000 honey', '50 pineapple', '50 sunflowerSeed', '3 stinger']
      },

      honeycombBelt: {
        mesh: function(box, cylinder, sphere){
          box(0, -0.1, 0, 0.55, 0.085, 0.55, false, [1.5, 1.4, 0]);
          box(-0.075, -0.035, 0.285, 0.1, 0.1, 0.05, [0, 0, 20], [5, 5, 5]);
          box(0.075, -0.035, 0.285, 0.1, 0.1, 0.05, [0, 0, -20], [5, 5, 5]);
          box(0, -0.165, 0.285, 0.1, 0.1, 0.05, false, [5, 5, 5]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 200000;
          stats.capacityMultiplier = (stats.capacityMultiplier || 1) * 1.75;
          stats.lootLuck = (stats.lootLuck || 1) * 1.75;
          stats.convertRate = (stats.convertRate || 1) * 1.75;
          stats.honeyFromTokens = (stats.honeyFromTokens || 1) * 1.5;
          stats.whiteBeeAttack = (stats.whiteBeeAttack || 0) + 1;
          stats.whiteBombPollen = (stats.whiteBombPollen || 1) * 1.3 * window.POLLEN_MULT;
          stats.beeEnergy = (stats.beeEnergy || 1) * 1.15;
        },
        desc: 'A luxurious faux honeycomb you can wear as a belt to greatly enhance your pollen capacity.<br><br>+200,000 capacity<br>x1.75 capacity<br>x1.75 loot luck<br>x1.75 convert rate<br>x1.5 honey from tokens<br>+1 white bee attack<br>x1.3 white bomb pollen<br>x1.15 bee energy',
        cost: ['50000000 honey', '25 glue', '25 enzymes', '25 oil']
      },

      petalBelt: {
        mesh: function(box, cylinder, sphere){
          box(-0.075 * 1.5, -0.1 + 0.05 * 1.5, 0.3, 0.2, 0.2, 0.05, [0, 0, 30], [1.25, 1.25, 1.25]);
          box(0.075 * 1.5, -0.1 + 0.025 * 1.5, 0.3, 0.2, 0.2, 0.05, [0, 0, 60], [1.25, 1.25, 1.25]);
          box(0, -0.1 - 0.05 * 1.5, 0.3, 0.2, 0.2, 0.05, false, [1.25, 1.25, 1.25]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 300000;
          stats.capacityMultiplier = (stats.capacityMultiplier || 1) * 2;
          stats.lootLuck = (stats.lootLuck || 1) * 2;
          stats.convertRate = (stats.convertRate || 1) * 1.8;
          stats.honeyFromTokens = (stats.honeyFromTokens || 1) * 1.5;
          stats.whiteBeeAttack = (stats.whiteBeeAttack || 0) + 2;
          stats.whiteBombPollen = (stats.whiteBombPollen || 1) * 1.5 * window.POLLEN_MULT;
          stats.beeEnergy = (stats.beeEnergy || 1) * 1.25;
          if (player && typeof player.addEffect === 'function') player.addEffect('petalStormPassive');
        },
        desc: 'Drape these petals about your waist to harness unlimited flower power.<br><br>+300,000 capacity<br>x2 capacity<br>x2 loot luck<br>x1.8 convert rate<br>x1.5 honey from tokens<br>+2 white bee attack<br>x1.5 white bomb pollen<br>x1.25 bee energy<br>+Passive: Petal Storm',
        cost: ['15000000000 honey', '15 starJelly', '50 glitter', '75 glue', '1 spiritPetal']
      }

    },

    // ---- backpack ----
    backpack: {

      none: { mesh: function(){}, applyStats: function(){} },

      pouch: {
        mesh: function(box, cylinder, sphere){
          sphere(0,0,-0.5,0.6,2,0.9,0.7,0.3);
          sphere(0,0.3,-0.5,0.2,2,0.9*0.7,0.7*0.7,0.3*0.7);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 200;
        },
        desc: 'A small bag.<br><br>+200 capacity',
        cost: ['0 honey']
      },

      jar: {
        mesh: function(box, cylinder, sphere){
          cylinder(0,0,-0.6,0.4,0.75,15,0.9*1.3,0.7*1.3,0.3*1.3,90,0,0);
          cylinder(0,0.33,-0.6,0.43,0.25,15,0.6,0.6,0.6,90,0,0);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 750;
        },
        desc: 'A durable plastic jar. Holds much more than the Pouch!<br><br>+750 capacity',
        cost: ['600 honey']
      },

      backpack: {
        mesh: function(box, cylinder, sphere){
          box(0,0,-0.4,0.55,0.7,0.35,false,[0.2,0.8,0.2]);
          box(0.13,0.1,-0.41,0.2,0.2,0.35,false,[0,0.5,0]);
          box(-0.13,0.1,-0.41,0.2,0.2,0.35,false,[0,0.5,0]);
          box(0,-0.15,-0.41,0.48,0.2,0.35,false,[1.3,1,0]);
          cylinder(0,0.7*0.5,-0.4,0.35*0.5,0.55,15,0.2,0.8,0.2,90,0,90);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 3500;
        },
        desc: 'A heavy-duty backpack.<br><br>+3,500 capacity',
        cost: ['5000 honey']
      },

      canister: {
        mesh: function(box, cylinder, sphere){
          cylinder(0,-0.15,-0.6,0.4,0.5,11,1.3,1.3,1.3,90,0,0);
          cylinder(0,0.1,-0.6,0.2,0.5,11,0.7,1,1.3,90,0,0);
          cylinder(0,0.3,-0.6,0.333,0.2,11,1.3,1.3,1.3,90,0,0);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 10000;
          stats.convertRate = (stats.convertRate || 1) * 1.3;
        },
        desc: 'A high-tech container that improves honey conversion speed.<br><br>+10,000 capacity<br>x1.3 convert rate',
        cost: ['22000 honey']
      },

      megaJug: {
        mesh: function(box, cylinder, sphere){
          cylinder(0,-0.1,-0.7,0.45,0.85,11,0.9*1.4,0.7*1.4,0.4*1.4,90,0,0);
          cylinder(0,-0.1,-0.7,0.451,0.2,11,0,0.45,0,90,0,0);
          sphere(0,-0.1 + 0.85 * 0.5, -0.7, 0.4 * 2, 2, 0, 0.4, 0);
          cylinder(0,0.6,-0.7,0.1,0.5,5,0,0.5,0,90,0,0);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 25000;
          stats.convertRate = (stats.convertRate || 1) * 1.4;
        },
        desc: 'A humongous jug!<br><br>+25,000 capacity<br>x1.4 convert rate',
        cost: ['50000 honey']
      },

      compressor: {
        mesh: function(box, cylinder, sphere){
          cylinder(0.2,-0.1,-0.5,0.2,0.9,10,1.25,1.25,1.25,90,0,0);
          cylinder(-0.2,-0.1,-0.5,0.2,0.9,10,1.25,1.25,1.25,90,0,0);
          sphere(0.2,-0.1+0.9*0.5,-0.5,0.2*2,2,1.25,1.25,1.25);
          sphere(-0.2,-0.1+0.9*0.5,-0.5,0.2*2,2,1.25,1.25,1.25);
          box(0,0,-0.5,0.95,0.3,0.4,false,[0.4,0.4,0.4]);
          box(0.35,-0.4,-0.6,0.25,0.5,0.2,[10,-30,0],[0.9,0.9,0.9]);
          box(-0.35,-0.4,-0.6,0.25,0.5,0.2,[10,30,0],[0.9,0.9,0.9]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 50000;
          stats.convertRate = (stats.convertRate || 1) * 1.55;
        },
        desc: 'A machine which packs pollen down to increase storage.<br><br>+50,000 capacity<br>x1.55 convert rate',
        cost: ['160000 honey']
      },

      eliteBarrel: {
        mesh: function(box, cylinder, sphere){
          cylinder(0, 0.4 * 0.5, -0.6, 0.4, 0.4, 15, 0.9 * 0.5, 0.6 * 0.5, 0.3 * 0.5, 90, 0, 0, 0.3);
          cylinder(0, -0.4 * 0.5, -0.6, 0.3, 0.4, 15, 0.9 * 0.5, 0.6 * 0.5, 0.3 * 0.5, 90, 0, 0, 0.4);
          cylinder(0, 0, -0.6, 0.401, 0.1, 15, 0.1, 0.1, 0.1, 90, 0, 0);
          cylinder(0, 0.2 + 0.2, -0.6, 0.29, 0.1, 15, 0.1, 0.1, 0.1, 90, 0, 0);
          cylinder(0, -0.2 - 0.2, -0.6, 0.29, 0.1, 15, 0.1, 0.1, 0.1, 90, 0, 0);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 125000;
          stats.convertRate = (stats.convertRate || 1) * 1.7;
        },
        desc: "The world's most advanced barrel.<br><br>+125,000 capacity<br>x1.7 convert rate",
        cost: ['650000 honey']
      },

      portOHive: {
        mesh: function(box, cylinder, sphere){
          cylinder(0, 0, -0.7, 0.5, 0.15, 10, 1.5, 1.4, 1, 90, 0, 0);
          cylinder(0, 0.2, -0.675, 0.43, 0.10, 15, 1.5, 1.4, 1, 90, 0, 0);
          cylinder(0, 0.35, -0.6, 0.25, 0.15, 10, 1.5, 1.4, 1, 90, 0, 0);
          cylinder(0, -0.2, -0.675, 0.43, 0.10, 15, 1.5, 1.4, 1, 90, 0, 0);
          cylinder(0, -0.35, -0.6, 0.25, 0.10, 15, 1.5, 1.4, 1, 90, 0, 0);
          sphere(0, 0, -0.65, 0.9, 1, 1.5, 1.4, 1);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 250000;
          stats.convertRate = (stats.convertRate || 1) * 2;
          stats.instantRedConversion = window.applyPercentage(stats.instantRedConversion, 0.05);
          stats.instantBlueConversion = window.applyPercentage(stats.instantBlueConversion, 0.05);
          stats.instantWhiteConversion = window.applyPercentage(stats.instantWhiteConversion, 0.05);
        },
        desc: 'A miniature hive you can wear on your back! Instantly converts some pollen to honey.<br>+250,000 capacity<br>x2 convert rate<br>+5% instant conversion',
        cost: ['1250000 honey']
      },

      redPortOHive: {
        mesh: function(box, cylinder, sphere){
          cylinder(0,0,-0.7,0.5,0.15,10,1.4,0,0,90,0,0);
          cylinder(0,0.2,-0.675,0.43,0.10,15,1.4,0,0,90,0,0);
          cylinder(0,0.35,-0.6,0.25,0.15,10,1.4,0,0,90,0,0);
          cylinder(0,-0.2,-0.675,0.43,0.10,15,1.4,0,0,90,0,0);
          cylinder(0,-0.35,-0.6,0.25,0.10,15,1.4,0,0,90,0,0);
          sphere(0,0,-0.65,0.9,1,1.4,0,0);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 450000;
          stats.convertRate = (stats.convertRate || 1) * 2.5;
          stats.instantRedConversion = window.applyPercentage(stats.instantRedConversion, 0.1);
          stats.redPollen = (stats.redPollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.redBeeAttack = (stats.redBeeAttack || 0) + 1;
        },
        desc: 'A Port-O-Hive dipped in shiny red paint. Works best for red bees and red pollen.<br>+450,000 capacity<br>x2.5 convert rate<br>+10% instant red conversion<br>x1.1 red pollen<br>+1 red bee attack',
        cost: ['7500000 honey']
      },

      bluePortOHive: {
        mesh: function(box, cylinder, sphere){
          cylinder(0,0,-0.7,0.5,0.15,10,0,0,1.4,90,0,0);
          cylinder(0,0.2,-0.675,0.43,0.10,15,0,0,1.4,90,0,0);
          cylinder(0,0.35,-0.6,0.25,0.15,10,0,0,1.4,90,0,0);
          cylinder(0,-0.2,-0.675,0.43,0.10,15,0,0,1.4,90,0,0);
          cylinder(0,-0.35,-0.6,0.25,0.10,15,0,0,1.4,90,0,0);
          sphere(0,0,-0.65,0.9,1,0,0,1.4);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 450000;
          stats.convertRate = (stats.convertRate || 1) * 2.5;
          stats.instantBlueConversion = window.applyPercentage(stats.instantBlueConversion, 0.1);
          stats.bluePollen = (stats.bluePollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.blueBeeAttack = (stats.blueBeeAttack || 0) + 1;
        },
        desc: 'A Port-O-Hive dipped in shiny blue paint. Works best for blue bees and blue pollen.<br>+450,000 capacity<br>x2.5 convert rate<br>+10% instant blue conversion<br>x1.1 blue pollen<br>+1 blue bee attack',
        cost: ['7500000 honey']
      },

      porcelainOHive: {
        mesh: function(box, cylinder, sphere){
          cylinder(0,0,-0.7,0.5,0.15,10,1.3,1.3,1.3,90,0,0);
          cylinder(0,0.2,-0.675,0.43,0.10,15,1.3,1.3,1.3,90,0,0);
          cylinder(0,0.35,-0.6,0.25,0.15,10,1.3,1.3,1.3,90,0,0);
          cylinder(0,-0.2,-0.675,0.43,0.10,15,1.3,1.3,1.3,90,0,0);
          cylinder(0,-0.35,-0.6,0.25,0.10,15,1.3,1.3,1.3,90,0,0);
          sphere(0,0,-0.65,0.9,1,1.3,1.3,1.3);
          box(0.4,0.1,-0.6,0.1,0.2,0.6,[0,25,20],[0,0,1.45]);
          box(0.4,-0.1,-0.6,0.1,0.2,0.4,[0,25,-10],[0,0,1.45]);
          box(-0.4,0.1,-0.6,0.1,0.2,0.6,[0,-25,20],[1.45,0,0]);
          box(-0.4,-0.1,-0.6,0.1,0.2,0.4,[0,-25,-10],[1.45,0,0]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 1000000;
          stats.convertRate = (stats.convertRate || 1) * 3;
          stats.instantRedConversion = window.applyPercentage(stats.instantRedConversion, 0.1);
          stats.instantBlueConversion = window.applyPercentage(stats.instantBlueConversion, 0.1);
          stats.instantWhiteConversion = window.applyPercentage(stats.instantWhiteConversion, 0.1);
          stats.whitePollen = (stats.whitePollen || 1) * 1.5 * window.POLLEN_MULT;
          stats.bluePollen = (stats.bluePollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.redPollen = (stats.redPollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.redBeeAttack = (stats.redBeeAttack || 0) + 1;
          stats.blueBeeAttack = (stats.blueBeeAttack || 0) + 1;
          stats.whiteBeeAttack = (stats.whiteBeeAttack || 0) + 1;
        },
        desc: 'A rare and precious Port-O-Hive that boosts white pollen.<br><br>+1,000,000 capacity<br>x3 convert rate<br>+10% instant conversion<br>x1.5 white pollen<br>x1.1 red pollen<br>x1.1 blue pollen<br>+1 bee attack',
        cost: ['150000000 honey']
      },

      coconutCanister: {
        mesh: function(box, cylinder, sphere){
          sphere(0,0,-0.6,1.3,2,0.4,0.2,0);
          sphere(-0.3,0.45,-0.6,0.4,1,0.1,0.05,0);
          sphere(-0.15,0.4,-0.9,0.4,1,0.1,0.05,0);
          sphere(0.05,0.5,-0.6,0.4,1,0.1,0.05,0);
          cylinder(0,0,-0.6,0.3,1.3,10,1.2,1.2,1.2,90,0,90);
          cylinder(-0.425,0,-0.6,0.2,0.57,10,100,0,0,90,0,90);
          cylinder(0.425,0,-0.6,0.2,0.57,10,0,0,100,90,0,90);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 3500000;
          stats.convertRate = (stats.convertRate || 1) * 5;
          stats.instantRedConversion = window.applyPercentage(stats.instantRedConversion, 0.15);
          stats.instantBlueConversion = window.applyPercentage(stats.instantBlueConversion, 0.15);
          stats.instantWhiteConversion = window.applyPercentage(stats.instantWhiteConversion, 0.1);
          stats.whitePollen = (stats.whitePollen || 1) * 1.25 * window.POLLEN_MULT;
          stats.redPollen = (stats.redPollen || 1) * 1.25 * window.POLLEN_MULT;
          stats.bluePollen = (stats.bluePollen || 1) * 1.25 * window.POLLEN_MULT;
          stats.whiteBeeAttack = (stats.whiteBeeAttack || 0) + 2;
          stats.redBeeAttack = (stats.redBeeAttack || 0) + 2;
          stats.blueBeeAttack = (stats.blueBeeAttack || 0) + 2;
          stats.defense = (stats.defense || 0) + 0.1;
          stats.honeyAtHive = (stats.honeyAtHive || 1) * 1.1;
          if (player && typeof player.addEffect === 'function'){
            player.addEffect('inspireCoconutsPassive');
            player.addEffect('emergencyCoconutShieldPassive');
          }
        },
        desc: 'A back-mounted coconut that protects you during emergencies.<br><br>+2,500,000 capacity<br>x5 convert rate<br>+15% instant conversion<br>+10% instant white conversion<br>x1.25 pollen<br>x1.25 white pollen<br>+2 bee attack<br>+10% defense<br>+Passive: Emergengy Coconut Shield<br>+Passive: Inspire Coconuts',
        cost: ['20000000000 honey', '75 tropicalDrink', '100 redExtract', '100 blueExtract']
      }

    }, // end backpack

    // ---- boots ----
    boots: {
      none: { mesh: function(){}, applyStats: function(){} },

      gummyBoots: {
        mesh: function(box, cylinder, sphere){
          box(-0.2, -0.5, 0.04, 0.36, 0.15, 0.73, false, [0.1 * 1.75, 1 * 1.75, 0.5 * 1.75]);
          box(0.2, -0.5, 0.04, 0.36, 0.15, 0.73, false, [0.1 * 1.75, 1 * 1.75, 0.5 * 1.75]);
          box(-0.2, -0.35, 0, 0.325, 0.2, 0.6, false, [1 * 1.75, 0.2 * 1.75, 1 * 1.75]);
          box(0.2, -0.35, 0, 0.325, 0.2, 0.6, false, [1 * 1.75, 0.2 * 1.75, 1 * 1.75]);
        },
        applyStats: function(stats, player){
          stats.movementCollection = (stats.movementCollection || 0) + 15;
          stats.walkSpeed = (stats.walkSpeed || 1) * 1.2;
          stats.jumpPower = (stats.jumpPower || 1) * 1.4;
          stats.pollenFromCoconuts = (stats.pollenFromCoconuts || 1) * 2 * window.POLLEN_MULT;
          stats.goo = (stats.goo || 1) * 1.25;
          stats.beeSpeed = (stats.beeSpeed || 1) * 1.3;
          stats.honeyFromTokens = (stats.honeyFromTokens || 1) * 1.25;
          stats.redPollen = (stats.redPollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.bluePollen = (stats.bluePollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.whitePollen = (stats.whitePollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.beeAttack = (stats.beeAttack || 1) * 1.1;
          stats.convertRateAtHive = (stats.convertRateAtHive || 1) * 2;
          if (player && typeof player.addEffect === 'function') player.addEffect('coconutHastePassive');
        },
        desc: 'Squishy boots that leave a trail of Goo wherever you go.<br><br>+15 movement collection<br>x1.25 goo<br>x1.3 bee speed<br>x1.25 honey from tokens<br>x1.1 pollen<br>x1.1 bee attack<br>x2 pollen from coconuts<br>x2 convert rate at hive<br>x1.2 movespeed<br>x1.4 jump power<br>+Passive: Goo Trail<br>+Passive: Coconut Haste',
        cost: ['50000000000 honey', '350 glue', '150 glitter', '150 redExtract', '150 blueExtract']
      },

      coconutClogs: {
        mesh: function(box, cylinder, sphere){ /* ... */ },
        applyStats: function(stats, player){
          stats.movementCollection = (stats.movementCollection || 0) + 12;
          stats.walkSpeed = (stats.walkSpeed || 1) * 1.175;
          stats.jumpPower = (stats.jumpPower || 1) * 1.385;
          stats.pollenFromCoconuts = (stats.pollenFromCoconuts || 1) * 2 * window.POLLEN_MULT;
        },
        desc: 'Coconut clogs (placeholder).',
        cost: ['5000000000 honey']
      },

      mondoBoots: {
        mesh: function(box, cylinder, sphere){ /* ... */ },
        applyStats: function(stats, player){
          stats.movementCollection = (stats.movementCollection || 0) + 10;
          stats.walkSpeed = (stats.walkSpeed || 1) * 1.15;
          stats.jumpPower = (stats.jumpPower || 1) * 1.375;
        },
        desc: 'Mondo boots (placeholder).',
        cost: ['7500000 honey']
      },

      basicBoots: {
        mesh: function(box, cylinder, sphere){ /* ... */ },
        applyStats: function(stats, player){
          stats.movementCollection = (stats.movementCollection || 0) + 1;
          stats.walkSpeed = (stats.walkSpeed || 1) * 1.1;
          stats.beeSpeed = (stats.beeSpeed || 1) * 1.05;
        },
        desc: 'Basic boots (placeholder).',
        cost: ['5000 honey']
      },

      hikingBoots: {
        mesh: function(box, cylinder, sphere){ /* ... */ },
        applyStats: function(stats, player){
          stats.movementCollection = (stats.movementCollection || 0) + 5;
          stats.walkSpeed = (stats.walkSpeed || 1) * 1.125;
          stats.jumpPower = (stats.jumpPower || 1) * 1.3;
          stats.beeSpeed = (stats.beeSpeed || 1) * 1.1;
        },
        desc: 'Hiking boots (placeholder).',
        cost: ['2000000 honey']
      }
    },

    // ---- leftGuard (example) ----
    leftGuard: {
      none: { mesh: function(){}, applyStats: function(){} },

      lookerGuard: {
        mesh: function(box, cylinder, sphere){
          box(0.35, 0.05, 0.1, 0.2, 0.2, 0.2, [0, 25, 30], [0.2, 1.2, 0.2]);
          box(0.35, 0.05, 0.1, 0.22, 0.22, 0.1, [0, 25, 30], [0.1, 0.1, 0.1]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 15000;
          stats.criticalChance = (stats.criticalChance || 0) + 0.03;
          stats.criticalPower = (stats.criticalPower || 1) + 0.25;
        },
        desc: 'A left shoulder pad crafted by a Looker Bee.<br><br>+15,000 capacity<br>+3% critical chance<br>+25% critical power',
        cost: ['100000 honey', '5 sunflowerSeed']
      },

      bomberGuard: {
        mesh: function(box, cylinder, sphere){
          box(0.35, 0.05, 0.1, 0.2, 0.2, 0.2, [0, 25, 30], [1.3, 1.3, 1.3]);
          box(0.35, 0.05, 0.1, 0.22, 0.22, 0.1, [0, 25, 30], [0.1, 0.1, 0.1]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 15000;
          stats.whitePollen = (stats.whitePollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.whiteBombPollen = (stats.whiteBombPollen || 1) * 1.15 * window.POLLEN_MULT;
        },
        desc: 'A left shoulder pad crafted by a Bomber Bee.<br><br>+15,000 capacity<br>x1.1 white pollen<br>x1.15 bomb pollen',
        cost: ['100000 honey', '5 pineapple']
      },

      redGuard: {
        mesh: function(box, cylinder, sphere){
          box(0.35, 0.05, 0.1, 0.2, 0.2, 0.2, [0, 25, 30], [1.3, 0, 0]);
          box(0.35, 0.05, 0.1, 0.22, 0.22, 0.1, [0, 25, 30], [0.1, 0.1, 0.1]);
        },
        applyStats: function(stats, player){
          stats.convertRate = (stats.convertRate || 1) * 1.1;
          stats.blueBeeAttack = (stats.blueBeeAttack || 0) + 1;
          stats.capacity = (stats.capacity || 0) + 25000;
          stats.redPollen = (stats.redPollen || 1) * 1.1 * window.POLLEN_MULT;
          stats.instantRedConversion = window.applyPercentage(stats.instantRedConversion, 0.03);
        },
        desc: 'A durable pad worn on the left shoulder of red beekeepers.<br><br>+25,000 capacity<br>x1.1 red pollen<br>x1.1 convert rate<br>+3% instant red conversion<br>+1 red bee attack',
        cost: ['1000000 honey', '30 strawberry', '1 royalJelly', '1 stinger']
      },

      eliteRedGuard: {
        mesh: function(box, cylinder, sphere){
          box(0.35, 0.05, 0.1, 0.2, 0.2, 0.2, [0, 25, 30], [1.3, 0, 0]);
          box(0.35, 0.05, 0.1, 0.22, 0.22, 0.1, [0, 25, 30], [0.1, 0.1, 0.1]);
          box(0.35, 0.1, 0.1, 0.5, 0.1, 0.05, [0, 25, 40], [0.1, 0.1, 0.1]);
        },
        applyStats: function(stats, player){
          stats.convertRate = (stats.convertRate || 1) * 1.15;
          stats.redBeeAttack = (stats.redBeeAttack || 0) + 1;
          stats.capacity = (stats.capacity || 0) + 75000;
          stats.redPollen = (stats.redPollen || 1) * 1.15 * window.POLLEN_MULT;
          stats.instantRedConversion = window.applyPercentage(stats.instantRedConversion, 0.05);
          stats.criticalChance = (stats.criticalChance || 0) + 0.05;
        },
        desc: 'A red guard reserved for the most dedicated red beekeepers.<br><br>+75,000 capacity<br>x1.15 red pollen<br>x1.15 convert rate<br>+5% instant red conversion<br>+5% critical chance<br>+1 red bee attack',
        cost: ['3500000 honey', '1 redExtract', '50 strawberry', '3 royalJelly', '3 stinger']
      },

      // Provide a safe fallback / minimal implementation for rileyGuard
      rileyGuard: {
        mesh: function(box, cylinder, sphere){
          // Minimal mesh to avoid syntax errors — replace with your full mesh if available
          box(0.35, 0.05, 0.1, 0.18, 0.18, 0.18, false, [0.8, 0.8, 0.8]);
        },
        applyStats: function(stats, player){
          stats.capacity = (stats.capacity || 0) + 20000;
        },
        desc: 'Riley guard (placeholder).',
        cost: ['500000 honey']
      }

    } // end leftGuard

    // You can add additional top-level categories (rightGuard, chest, tools, etc.) below.
    // Make sure all entries have valid function bodies and commas between properties.
  }); // end Object.assign(window.playerGear, {...})

  // Optional: log to help debugging during development
  if (typeof console !== 'undefined' && console.info){
    console.info('playerGear loaded — Pollen multiplier:', window.POLLEN_MULT);
  }

})(); // end IIFE
