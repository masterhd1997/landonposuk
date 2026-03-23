export interface Feature {
  id: string;
  name: string;
  description: string;
  category: typeof CATEGORIES[number];
  type: 'toggle' | 'trigger' | 'slider';
  value?: boolean | number;
  origin: 'Impulse' | 'Paragon' | 'Disturbed' | 'Luna' | 'W1tch' | 'System';
  group?: string; // To group features within a category (e.g., "Modifiers", "Actions")
}

export const CATEGORIES = [
  'Favorites', 'Self', 'Lobby', 'Players', 'Teleport', 'Weapons', 'World', 'Vehicle',
  'Lua', 'Misc', 'Protection', 'Recovery', 'Spoofing', 'Settings',
  'Visuals', 'Aimbot'
] as const;

export const CATEGORY_GROUPS = {
  Quick: ['Favorites'],
  Entities: ['Self', 'Lobby', 'Players', 'Teleport', 'Weapons', 'World', 'Vehicle'],
  Misc: ['Lua', 'Misc', 'Protection', 'Recovery', 'Spoofing', 'Settings'],
  Visuals: ['Visuals'],
  Aimbot: ['Aimbot']
} as const;

export const FEATURES: Feature[] = [
  // 1. Self (Player Options)
  { id: 'godmode', name: 'God Mode', description: 'Complete immortality.', category: 'Self', group: 'Vitals', type: 'toggle', value: false, origin: 'System' },
  { id: 'semi_godmode', name: 'Semi-God Mode', description: 'High resistance but not immortal.', category: 'Self', group: 'Vitals', type: 'toggle', value: false, origin: 'System' },
  { id: 'never_wanted', name: 'Never Wanted', description: 'Police will never pursue you.', category: 'Self', group: 'Vitals', type: 'toggle', value: false, origin: 'System' },
  { id: 'invisible', name: 'Invisibility', description: 'Become invisible to others.', category: 'Self', group: 'Vitals', type: 'toggle', value: false, origin: 'System' },
  { id: 'no_ragdoll', name: 'No Ragdoll', description: 'Prevent falling over.', category: 'Self', group: 'Vitals', type: 'toggle', value: false, origin: 'System' },
  { id: 'seatbelt', name: 'Seatbelt', description: 'Stay inside vehicles during crashes.', category: 'Self', group: 'Vitals', type: 'toggle', value: false, origin: 'System' },
  { id: 'auto_heal', name: 'Auto Heal', description: 'Automatically regenerate health.', category: 'Self', group: 'Vitals', type: 'toggle', value: false, origin: 'System' },
  { id: 'clean_ped', name: 'Clean Ped', description: 'Remove blood and dirt.', category: 'Self', group: 'Vitals', type: 'trigger', origin: 'System' },
  { id: 'max_health_armor', name: 'Max Health/Armor', description: 'Refill vitals.', category: 'Self', group: 'Vitals', type: 'trigger', origin: 'System' },
  { id: 'suicide', name: 'Suicide', description: 'Instantly kill yourself.', category: 'Self', group: 'Vitals', type: 'trigger', origin: 'System' },
  
  { id: 'super_jump', name: 'Super Jump', description: 'Jump extremely high.', category: 'Self', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'super_run', name: 'Super Run', description: 'Run at superhuman speeds.', category: 'Self', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'fast_swim', name: 'Fast Swim', description: 'Increase your swimming speed.', category: 'Self', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'swim_air', name: 'Swim in Air', description: 'Swim through the sky.', category: 'Self', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'flight_mode', name: 'Flight Mode', description: 'Manual or auto-flight.', category: 'Self', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'graceful_landing', name: 'Graceful Landing', description: 'Land perfectly every time.', category: 'Self', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'infinite_stamina', name: 'Infinite Stamina', description: 'Run and swim forever.', category: 'Self', group: 'Movement', type: 'toggle', value: false, origin: 'System' },

  { id: 'tiny_player', name: 'Tiny Player', description: 'Shrink your character model.', category: 'Self', group: 'Appearance', type: 'toggle', value: false, origin: 'System' },
  { id: 'outfit_editor', name: 'Outfit Editor', description: 'Access all DLC clothes and save outfits.', category: 'Self', group: 'Appearance', type: 'trigger', origin: 'System' },
  { id: 'wardrobe', name: 'Wardrobe', description: 'Custom outfit manager.', category: 'Self', group: 'Appearance', type: 'trigger', origin: 'System' },
  { id: 'model_changer', name: 'Model Changer', description: 'Transform into animals or NPCs.', category: 'Self', group: 'Appearance', type: 'trigger', origin: 'System' },
  { id: 'comp_changer', name: 'Components Changer', description: 'Modify specific ped parts.', category: 'Self', group: 'Appearance', type: 'trigger', origin: 'System' },
  { id: 'hair_makeup', name: 'Hair & Makeup', description: 'Change facial features.', category: 'Self', group: 'Appearance', type: 'trigger', origin: 'System' },

  { id: 'scenario_player', name: 'Scenario Player', description: 'Play various character scenarios (sit, smoke, etc.).', category: 'Self', group: 'Animations', type: 'trigger', origin: 'System' },
  { id: 'walk_style', name: 'Walk Style', description: 'Change how you walk.', category: 'Self', group: 'Animations', type: 'trigger', origin: 'System' },
  { id: 'speech_player', name: 'Speech Player', description: 'Play character voice lines.', category: 'Self', group: 'Animations', type: 'trigger', origin: 'System' },
  { id: 'anim_pushups', name: 'Push-ups', description: 'Perform push-ups.', category: 'Self', group: 'Animations', type: 'trigger', origin: 'System' },
  { id: 'anim_situps', name: 'Sit-ups', description: 'Perform sit-ups.', category: 'Self', group: 'Animations', type: 'trigger', origin: 'System' },
  { id: 'anim_burning', name: 'Burning Effect', description: 'Visual burning animation.', category: 'Self', group: 'Animations', type: 'trigger', origin: 'System' },

  { id: 'seatbelt', name: 'Seatbelt', description: 'Stay inside vehicles during crashes.', category: 'Self', group: 'Misc', type: 'toggle', value: false, origin: 'System' },
  { id: 'ignored_by_everyone', name: 'Ignored by Everyone', description: 'NPCs will not attack you.', category: 'Self', group: 'Misc', type: 'toggle', value: false, origin: 'System' },
  { id: 'freeze_wanted', name: 'Freeze Wanted Level', description: 'Keep wanted level at current stars.', category: 'Self', group: 'Misc', type: 'toggle', value: false, origin: 'System' },
  { id: 'clear_wanted', name: 'Clear Wanted Level', description: 'Instantly remove all stars.', category: 'Self', group: 'Misc', type: 'trigger', origin: 'System' },

  // 2. Vehicle
  { id: 'veh_god_mode', name: 'Vehicle God Mode', description: 'Make your vehicle invincible.', category: 'Vehicle', group: 'Defense', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_auto_repair', name: 'Auto-Repair', description: 'Automatically fix damage.', category: 'Vehicle', group: 'Defense', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_auto_flip', name: 'Auto-Flip', description: 'Automatically flip upright.', category: 'Vehicle', group: 'Defense', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_invisible', name: 'Invisibility', description: 'Hide your vehicle from others.', category: 'Vehicle', group: 'Defense', type: 'toggle', value: false, origin: 'System' },

  { id: 'veh_speed_mult', name: 'Speed Multiplier', description: 'Extreme speed for any vehicle.', category: 'Vehicle', group: 'Performance', type: 'slider', value: 1, origin: 'System' },
  { id: 'veh_engine_mult', name: 'Engine Multiplier', description: 'Boost engine power.', category: 'Vehicle', group: 'Performance', type: 'slider', value: 1, origin: 'System' },
  { id: 'veh_torque_mult', name: 'Torque Multiplier', description: 'Increase acceleration force.', category: 'Vehicle', group: 'Performance', type: 'slider', value: 1, origin: 'System' },
  { id: 'veh_brake_force', name: 'Brake Force', description: 'Extreme braking power.', category: 'Vehicle', group: 'Performance', type: 'slider', value: 1, origin: 'System' },
  { id: 'veh_handling', name: 'Handling Editor', description: 'Modify mass, traction, etc.', category: 'Vehicle', group: 'Performance', type: 'trigger', origin: 'System' },
  { id: 'veh_instant_stop', name: 'Instant Stop', description: 'Stop moving immediately.', category: 'Vehicle', group: 'Performance', type: 'trigger', origin: 'System' },

  { id: 'veh_fly', name: 'Vehicle Fly Mode', description: 'Fly your car like a plane.', category: 'Vehicle', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_drift', name: 'Drift Mode', description: 'Low friction handling.', category: 'Vehicle', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_jump', name: 'Vehicle Jump', description: 'Press space to jump.', category: 'Vehicle', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_autopilot', name: 'Waypoint Autopilot', description: 'AI drives you to your waypoint.', category: 'Vehicle', group: 'Movement', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_drive_water', name: 'Drive on Water', description: 'Vehicles float and drive on water.', category: 'Vehicle', group: 'Movement', type: 'toggle', value: false, origin: 'System' },

  { id: 'veh_weapons', name: 'Vehicle Weapons', description: 'Add weaponry to regular cars.', category: 'Vehicle', group: 'Combat', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_rockets', name: 'Homing Rockets', description: 'Shoot guided missiles.', category: 'Vehicle', group: 'Combat', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_mines', name: 'Proximity Mines', description: 'Drop mines behind you.', category: 'Vehicle', group: 'Combat', type: 'toggle', value: false, origin: 'System' },

  { id: 'veh_rainbow', name: 'Rainbow Mode', description: 'Cycle through vehicle colors.', category: 'Vehicle', group: 'Visuals', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_chrome_loop', name: 'Chrome Loop', description: 'Cycle through chrome finishes.', category: 'Vehicle', group: 'Visuals', type: 'toggle', value: false, origin: 'System' },
  { id: 'veh_neon', name: 'Neon Lights', description: 'Toggle underglow.', category: 'Vehicle', group: 'Visuals', type: 'trigger', origin: 'System' },
  { id: 'veh_slam_it', name: 'Slam It', description: 'Extreme suspension tuning.', category: 'Vehicle', group: 'Visuals', type: 'toggle', value: false, origin: 'System' },

  { id: 'veh_spawner', name: 'Vehicle Spawner', description: 'Access any vehicle instantly.', category: 'Vehicle', group: 'Spawner', type: 'trigger', origin: 'System' },
  { id: 'veh_spawn_inside', name: 'Spawn Inside', description: 'Warp into vehicle on spawn.', category: 'Vehicle', group: 'Spawner', type: 'toggle', value: true, origin: 'System' },

  // 3. Weapon
  { id: 'inf_ammo', name: 'Infinite Ammo', description: 'Never run out of bullets.', category: 'Weapons', group: 'Ammo', type: 'toggle', value: false, origin: 'System' },
  { id: 'inf_clip', name: 'Infinite Clip', description: 'Never reload your weapon.', category: 'Weapons', group: 'Ammo', type: 'toggle', value: false, origin: 'System' },
  { id: 'max_ammo', name: 'Max Ammo', description: 'Refill all weapon ammo.', category: 'Weapons', group: 'Ammo', type: 'trigger', origin: 'System' },
  { id: 'explosive_ammo', name: 'Explosive Bullets', description: 'Bullets explode on impact.', category: 'Weapons', group: 'Ammo', type: 'toggle', value: false, origin: 'System' },
  { id: 'flaming_ammo', name: 'Flaming Bullets', description: 'Bullets set targets on fire.', category: 'Weapons', group: 'Ammo', type: 'toggle', value: false, origin: 'System' },
  { id: 'water_ammo', name: 'Water Ammo', description: 'Bullets shoot high-pressure water.', category: 'Weapons', group: 'Ammo', type: 'toggle', value: false, origin: 'System' },
  { id: 'money_ammo', name: 'Money Ammo', description: 'Shoot cash bags at targets.', category: 'Weapons', group: 'Ammo', type: 'toggle', value: false, origin: 'System' },
  { id: 'rainbow_ammo', name: 'Rainbow Ammo', description: 'Bullets change color rapidly.', category: 'Weapons', group: 'Ammo', type: 'toggle', value: false, origin: 'System' },

  { id: 'no_recoil', name: 'No Recoil', description: 'Remove weapon kickback.', category: 'Weapons', group: 'Combat', type: 'toggle', value: false, origin: 'System' },
  { id: 'no_spread', name: 'No Spread', description: 'Perfect accuracy.', category: 'Weapons', group: 'Combat', type: 'toggle', value: false, origin: 'System' },
  { id: 'rapid_fire', name: 'Rapid Fire', description: 'Insane fire rate.', category: 'Weapons', group: 'Combat', type: 'toggle', value: false, origin: 'System' },
  { id: 'instant_kill', name: 'Instant Kill', description: 'One shot, one kill.', category: 'Weapons', group: 'Combat', type: 'toggle', value: false, origin: 'System' },
  { id: 'trigger_bot', name: 'Trigger Bot', description: 'Auto-fire when aiming at target.', category: 'Weapons', group: 'Combat', type: 'toggle', value: false, origin: 'System' },
  { id: 'weapon_dmg_mult', name: 'Damage Multiplier', description: 'Increase weapon damage.', category: 'Weapons', group: 'Combat', type: 'slider', value: 1, origin: 'System' },

  { id: 'vehicle_gun', name: 'Vehicle Gun', description: 'Shoot vehicles instead of bullets.', category: 'Weapons', group: 'Specials', type: 'toggle', value: false, origin: 'System' },
  { id: 'gravity_gun', name: 'Gravity Gun', description: 'Pick up and throw objects.', category: 'Weapons', group: 'Specials', type: 'toggle', value: false, origin: 'System' },
  { id: 'delete_gun', name: 'Delete Gun', description: 'Delete objects on impact.', category: 'Weapons', group: 'Specials', type: 'toggle', value: false, origin: 'System' },
  { id: 'teleport_gun', name: 'Teleport Gun', description: 'Teleport to bullet impact.', category: 'Weapons', group: 'Specials', type: 'toggle', value: false, origin: 'System' },
  { id: 'harpoon_gun', name: 'Harpoon Gun', description: 'Pull targets toward you.', category: 'Weapons', group: 'Specials', type: 'toggle', value: false, origin: 'System' },
  { id: 'shrink_gun', name: 'Shrink Gun', description: 'Shrink targets on impact.', category: 'Weapons', group: 'Specials', type: 'toggle', value: false, origin: 'System' },
  { id: 'orbital_cannon', name: 'Orbital Strike Gun', description: 'Call in orbital strikes.', category: 'Weapons', group: 'Specials', type: 'toggle', value: false, origin: 'System' },

  { id: 'bullet_tracers', name: 'Bullet Tracers', description: 'Show bullet paths.', category: 'Weapons', group: 'Visuals', type: 'toggle', value: false, origin: 'System' },
  { id: 'laser_sight', name: 'Laser Sight', description: 'Add a persistent laser pointer.', category: 'Weapons', group: 'Visuals', type: 'toggle', value: false, origin: 'System' },
  { id: 'impact_fx', name: 'Impact Effects', description: 'Custom bullet impact particles.', category: 'Weapons', group: 'Visuals', type: 'toggle', value: false, origin: 'System' },

  // 4. Protections
  { id: 'block_crashes', name: 'Block Crashes', description: 'Immunity to crash attempts.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_kicks', name: 'Block Kicks', description: 'Immunity to session kicks.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_tp', name: 'Block Teleports', description: 'Prevent remote teleports.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_script_events', name: 'Block Script Events', description: 'Block remote script triggers.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_entity_spam', name: 'Block Entity Spam', description: 'Prevent object/ped spamming.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_chat_spoof', name: 'Block Chat Spoof', description: 'Prevent others from chatting as you.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_sound_spam', name: 'Block Sound Spam', description: 'Mute remote sound triggers.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_freeze', name: 'Block Freeze', description: 'Prevent remote freezing.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_cage', name: 'Block Cage', description: 'Prevent remote caging.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_fire', name: 'Block Fire', description: 'Prevent remote fire spawning.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_water', name: 'Block Water', description: 'Prevent remote water spawning.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_explosions', name: 'Block Explosions', description: 'Prevent remote explosions.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'block_ptfx', name: 'Block PTFX', description: 'Block remote particle effects.', category: 'Protection', group: 'Defenses', type: 'toggle', value: true, origin: 'System' },
  { id: 'desync_prot', name: 'Desync Protection', description: 'Hide your true position.', category: 'Protection', group: 'Defenses', type: 'toggle', value: false, origin: 'System' },

  { id: 'prot_log_events', name: 'Log Remote Events', description: 'Show all incoming modder events in console.', category: 'Protection', group: 'Logging', type: 'toggle', value: true, origin: 'System' },
  { id: 'prot_notify_events', name: 'Notify on Event', description: 'Show notification when an event is blocked.', category: 'Protection', group: 'Logging', type: 'toggle', value: true, origin: 'System' },
  { id: 'prot_mark_modders', name: 'Auto-Mark Modders', description: 'Automatically tag modders in the player list.', category: 'Protection', group: 'Logging', type: 'toggle', value: true, origin: 'System' },

  { id: 'prot_kick_modders', name: 'Auto-Kick Modders', description: 'Automatically kick anyone who tries to mod you.', category: 'Protection', group: 'Reactionary', type: 'toggle', value: false, origin: 'System' },
  { id: 'prot_crash_modders', name: 'Auto-Crash Modders', description: 'Automatically crash anyone who tries to mod you.', category: 'Protection', group: 'Reactionary', type: 'toggle', value: false, origin: 'System' },
  { id: 'prot_karma', name: 'Karma Mode', description: 'Reflect all modder events back to the sender.', category: 'Protection', group: 'Reactionary', type: 'toggle', value: false, origin: 'System' },

  { id: 'prot_forcefield', name: 'Forcefield', description: 'Push away nearby entities and vehicles.', category: 'Protection', group: 'Physical', type: 'toggle', value: false, origin: 'System' },
  { id: 'prot_anti_npc', name: 'Anti-NPC', description: 'Prevent NPCs from approaching you.', category: 'Protection', group: 'Physical', type: 'toggle', value: false, origin: 'System' },
  { id: 'prot_anti_vehicle', name: 'Anti-Vehicle', description: 'Prevent vehicles from approaching you.', category: 'Protection', group: 'Physical', type: 'toggle', value: false, origin: 'System' },

  { id: 'spoof_name', name: 'Spoof Name', description: 'Hide your real display name.', category: 'Spoofing', group: 'Identity', type: 'toggle', value: false, origin: 'System' },
  { id: 'spoof_ip', name: 'Spoof IP', description: 'Hide your real IP address.', category: 'Spoofing', group: 'Network', type: 'toggle', value: false, origin: 'System' },
  { id: 'spoof_rid', name: 'Spoof RID', description: 'Hide your Rockstar ID.', category: 'Spoofing', group: 'Identity', type: 'toggle', value: false, origin: 'System' },
  { id: 'spoof_rank', name: 'Spoof Rank', description: 'Show a fake level to others.', category: 'Spoofing', group: 'Stats', type: 'slider', value: 1, origin: 'System' },
  { id: 'spoof_kd', name: 'Spoof K/D', description: 'Show a fake K/D to others.', category: 'Spoofing', group: 'Stats', type: 'slider', value: 1.0, origin: 'System' },
  { id: 'spoof_crew', name: 'Spoof Crew', description: 'Show a fake crew tag.', category: 'Spoofing', group: 'Identity', type: 'trigger', origin: 'System' },
  { id: 'spoof_money', name: 'Spoof Money', description: 'Show a fake bank balance.', category: 'Spoofing', group: 'Stats', type: 'slider', value: 1000000, origin: 'System' },
  { id: 'spoof_playtime', name: 'Spoof Playtime', description: 'Show fake total hours played.', category: 'Spoofing', group: 'Stats', type: 'slider', value: 500, origin: 'System' },
  { id: 'spoof_language', name: 'Spoof Language', description: 'Show a fake game language.', category: 'Spoofing', group: 'Identity', type: 'trigger', origin: 'System' },
  { id: 'spoof_platform', name: 'Spoof Platform', description: 'Show a fake gaming platform.', category: 'Spoofing', group: 'Network', type: 'trigger', origin: 'System' },
  { id: 'spoof_voice', name: 'Spoof Voice Chat', description: 'Hide your voice chat status.', category: 'Spoofing', group: 'Network', type: 'toggle', value: false, origin: 'System' },
  { id: 'spoof_bad_sport', name: 'Spoof Bad Sport', description: 'Show a fake bad sport status.', category: 'Spoofing', group: 'Status', type: 'toggle', value: false, origin: 'System' },
  { id: 'spoof_commendations', name: 'Spoof Commendations', description: 'Show fake commendation count.', category: 'Spoofing', group: 'Status', type: 'slider', value: 100, origin: 'System' },
  { id: 'spoof_reports', name: 'Spoof Reports', description: 'Show fake report count.', category: 'Spoofing', group: 'Status', type: 'slider', value: 0, origin: 'System' },

  // 5. World & Teleport
  { id: 'tp_waypoint', name: 'Teleport to Waypoint', description: 'Move to marker.', category: 'Teleport', group: 'Quick TP', type: 'trigger', origin: 'System' },
  { id: 'tp_auto_waypoint', name: 'Auto Teleport to Waypoint', description: 'Automatically warp when marker is set.', category: 'Teleport', group: 'Quick TP', type: 'toggle', value: false, origin: 'System' },
  { id: 'tp_blip', name: 'Teleport to Blip', description: 'Move to map blip.', category: 'Teleport', group: 'Quick TP', type: 'trigger', origin: 'System' },
  { id: 'tp_objective', name: 'Teleport to Objective', description: 'Move to current mission goal.', category: 'Teleport', group: 'Quick TP', type: 'trigger', origin: 'System' },
  { id: 'tp_last_vehicle', name: 'Teleport to Last Vehicle', description: 'Warp to your previous car.', category: 'Teleport', group: 'Quick TP', type: 'trigger', origin: 'System' },

  { id: 'tp_apartment_1', name: 'Eclipse Towers', description: 'Warp to high-end apartment.', category: 'Teleport', group: 'Safehouses', type: 'trigger', origin: 'System' },
  { id: 'tp_apartment_2', name: 'Del Perro Heights', description: 'Warp to beachside apartment.', category: 'Teleport', group: 'Safehouses', type: 'trigger', origin: 'System' },
  { id: 'tp_facility', name: 'Doomsday Facility', description: 'Warp to your secret base.', category: 'Teleport', group: 'Safehouses', type: 'trigger', origin: 'System' },
  { id: 'tp_bunker', name: 'Bunker Base', description: 'Warp to your arms trade hub.', category: 'Teleport', group: 'Safehouses', type: 'trigger', origin: 'System' },

  { id: 'tp_lsc_city', name: 'LSC (City)', description: 'Warp to central Los Santos Customs.', category: 'Teleport', group: 'Services', type: 'trigger', origin: 'System' },
  { id: 'tp_lsc_desert', name: 'LSC (Desert)', description: 'Warp to Blaine County Customs.', category: 'Teleport', group: 'Services', type: 'trigger', origin: 'System' },
  { id: 'tp_ammunation_city', name: 'Ammu-Nation (City)', description: 'Warp to main gun shop.', category: 'Teleport', group: 'Services', type: 'trigger', origin: 'System' },
  { id: 'tp_clothing', name: 'Ponsonbys', description: 'Warp to high-end clothing store.', category: 'Teleport', group: 'Services', type: 'trigger', origin: 'System' },

  { id: 'tp_casino', name: 'Diamond Casino', description: 'Warp to the gambling floor.', category: 'Teleport', group: 'Landmarks', type: 'trigger', origin: 'System' },
  { id: 'tp_maze_bank', name: 'Maze Bank Tower', description: 'Warp to the tallest building.', category: 'Teleport', group: 'Landmarks', type: 'trigger', origin: 'System' },
  { id: 'tp_mount_chiliad', name: 'Mount Chiliad', description: 'Warp to the mountain peak.', category: 'Teleport', group: 'Landmarks', type: 'trigger', origin: 'System' },
  { id: 'tp_airport', name: 'LS Airport', description: 'Warp to the main runway.', category: 'Teleport', group: 'Landmarks', type: 'trigger', origin: 'System' },
  { id: 'tp_fort_zancudo', name: 'Fort Zancudo', description: 'Warp to the military base.', category: 'Teleport', group: 'Landmarks', type: 'trigger', origin: 'System' },
  { id: 'tp_island', name: 'Cayo Perico', description: 'Warp to the tropical island.', category: 'Teleport', group: 'Landmarks', type: 'trigger', origin: 'System' },

  { id: 'tp_kosatka', name: 'Kosatka Submarine', description: 'Warp to your heist sub.', category: 'Teleport', group: 'Heist Setup', type: 'trigger', origin: 'System' },
  { id: 'tp_arcade', name: 'Arcade Center', description: 'Warp to your heist planning hub.', category: 'Teleport', group: 'Heist Setup', type: 'trigger', origin: 'System' },
  { id: 'tp_agency', name: 'The Agency', description: 'Warp to your contract office.', category: 'Teleport', group: 'Heist Setup', type: 'trigger', origin: 'System' },
  { id: 'tp_salvage_yard', name: 'Salvage Yard', description: 'Warp to your chop shop.', category: 'Teleport', group: 'Heist Setup', type: 'trigger', origin: 'System' },

  { id: 'world_set_morning', name: 'Morning', description: 'Set time to 08:00.', category: 'World', group: 'Time Control', type: 'trigger', origin: 'System' },
  { id: 'world_set_noon', name: 'Noon', description: 'Set time to 12:00.', category: 'World', group: 'Time Control', type: 'trigger', origin: 'System' },
  { id: 'world_set_evening', name: 'Evening', description: 'Set time to 18:00.', category: 'World', group: 'Time Control', type: 'trigger', origin: 'System' },
  { id: 'world_set_midnight', name: 'Midnight', description: 'Set time to 00:00.', category: 'World', group: 'Time Control', type: 'trigger', origin: 'System' },
  { id: 'world_pause_time', name: 'Pause Time', description: 'Stop the world clock.', category: 'World', group: 'Time Control', type: 'toggle', value: false, origin: 'System' },
  { id: 'world_sync_time', name: 'Sync with System', description: 'Match real-world time.', category: 'World', group: 'Time Control', type: 'toggle', value: false, origin: 'System' },
  { id: 'world_set_hour', name: 'Set Hour', description: 'Change time of day.', category: 'World', group: 'Time Control', type: 'slider', value: 12, origin: 'System' },

  { id: 'world_weather_clear', name: 'Clear', description: 'Force clear weather.', category: 'World', group: 'Weather', type: 'trigger', origin: 'System' },
  { id: 'world_weather_storm', name: 'Stormy', description: 'Force stormy weather.', category: 'World', group: 'Weather', type: 'trigger', origin: 'System' },
  { id: 'world_weather_snow', name: 'Snow', description: 'Force snow weather.', category: 'World', group: 'Weather', type: 'trigger', origin: 'System' },
  { id: 'world_weather_blizzard', name: 'Blizzard', description: 'Force blizzard weather.', category: 'World', group: 'Weather', type: 'trigger', origin: 'System' },
  { id: 'world_weather_foggy', name: 'Foggy', description: 'Force foggy weather.', category: 'World', group: 'Weather', type: 'trigger', origin: 'System' },
  { id: 'world_weather_xmas', name: 'Christmas', description: 'Force Christmas weather.', category: 'World', group: 'Weather', type: 'trigger', origin: 'System' },
  { id: 'world_weather_halloween', name: 'Halloween', description: 'Force Halloween weather.', category: 'World', group: 'Weather', type: 'trigger', origin: 'System' },

  { id: 'world_blackout', name: 'Blackout Mode', description: 'Turn off all city lights.', category: 'World', group: 'Environment', type: 'toggle', value: false, origin: 'System' },
  { id: 'world_riot', name: 'Riot Mode', description: 'NPCs attack each other.', category: 'World', group: 'Environment', type: 'toggle', value: false, origin: 'System' },
  { id: 'world_low_gravity', name: 'Low Gravity', description: 'Reduce gravity for all objects.', category: 'World', group: 'Environment', type: 'toggle', value: false, origin: 'System' },
  { id: 'world_chaos', name: 'Chaos Mode', description: 'Random explosions and events.', category: 'World', group: 'Environment', type: 'toggle', value: false, origin: 'System' },
  { id: 'world_ped_density', name: 'Pedestrian Density', description: 'Adjust NPC population.', category: 'World', group: 'Environment', type: 'slider', value: 1, origin: 'System' },
  { id: 'world_traffic_density', name: 'Traffic Density', description: 'Adjust vehicle population.', category: 'World', group: 'Environment', type: 'slider', value: 1, origin: 'System' },
  { id: 'world_clear_area', name: 'Clear Area', description: 'Remove peds and traffic.', category: 'World', group: 'Environment', type: 'trigger', origin: 'System' },

  { id: 'spawn_ramp', name: 'Spawn Ramp', description: 'Place a ramp in the world.', category: 'World', group: 'Object Spawner', type: 'trigger', origin: 'System' },
  { id: 'spawn_building', name: 'Spawn Building', description: 'Place a building obstacle.', category: 'World', group: 'Object Spawner', type: 'trigger', origin: 'System' },
  { id: 'spawn_barrier', name: 'Spawn Barrier', description: 'Place a concrete barrier.', category: 'World', group: 'Object Spawner', type: 'trigger', origin: 'System' },
  { id: 'spawn_container', name: 'Spawn Container', description: 'Place a shipping container.', category: 'World', group: 'Object Spawner', type: 'trigger', origin: 'System' },
  { id: 'spawn_tree', name: 'Spawn Tree', description: 'Place a decorative tree.', category: 'World', group: 'Object Spawner', type: 'trigger', origin: 'System' },

  // 6. Online / Players
  { id: 'player_list', name: 'Player List', description: 'View detailed lobby info.', category: 'Players', group: 'Player List', type: 'trigger', origin: 'System' },
  { id: 'detect_modders', name: 'Detect Modders', description: 'Identify other mod menu users.', category: 'Players', group: 'Player List', type: 'toggle', value: true, origin: 'System' },

  { id: 'player_spectate', name: 'Spectate Player', description: 'Watch player in real-time.', category: 'Players', group: 'Remote Actions', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_freeze', name: 'Freeze Player', description: 'Stop player from moving.', category: 'Players', group: 'Remote Actions', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_heal', name: 'Heal Player', description: 'Refill player health/armor.', category: 'Players', group: 'Remote Actions', type: 'trigger', origin: 'System' },
  { id: 'player_give_armor', name: 'Give Armor', description: 'Refill player armor.', category: 'Players', group: 'Remote Actions', type: 'trigger', origin: 'System' },
  { id: 'player_semi_god', name: 'Give Semi-God', description: 'Grant resistance to player.', category: 'Players', group: 'Remote Actions', type: 'trigger', origin: 'System' },

  { id: 'player_kick', name: 'Kick Player', description: 'Remove player from session.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_kick_sp', name: 'Kick to Singleplayer', description: 'Force player out of online.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_crash', name: 'Crash Player', description: 'Attempt to crash player game.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_cage', name: 'Cage Player', description: 'Trap player in a cage.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_explode', name: 'Explode Player', description: 'Remote detonation.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_fire', name: 'Set on Fire', description: 'Ignite player.', category: 'Players', group: 'Trolling', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_shake', name: 'Shake Camera', description: 'Apply screen shake to player.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_attach', name: 'Attach Objects', description: 'Stick objects to player.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_clone', name: 'Clone Player', description: 'Create a copy of the player.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },

  { id: 'player_give_weapons', name: 'Give All Weapons', description: 'Drop all weapons for player.', category: 'Players', group: 'Gifting', type: 'trigger', origin: 'System' },
  { id: 'player_remove_weapons', name: 'Remove All Weapons', description: 'Disarm player.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_give_parachute', name: 'Give Parachute', description: 'Give player a parachute.', category: 'Players', group: 'Gifting', type: 'trigger', origin: 'System' },
  { id: 'player_drop_cash', name: 'Drop Cash', description: 'Spawn cash bags on player.', category: 'Players', group: 'Gifting', type: 'trigger', origin: 'System' },
  { id: 'player_give_vehicle', name: 'Give Vehicle', description: 'Spawn a vehicle for player.', category: 'Players', group: 'Gifting', type: 'trigger', origin: 'System' },
  { id: 'player_godmode', name: 'Toggle Godmode', description: 'Grant immortality to player.', category: 'Players', group: 'Gifting', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_remove_wanted', name: 'Remove Wanted', description: 'Clear player wanted level.', category: 'Players', group: 'Gifting', type: 'trigger', origin: 'System' },
  { id: 'player_give_off_radar', name: 'Give Off-Radar', description: 'Hide player from radar.', category: 'Players', group: 'Gifting', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_give_never_wanted', name: 'Give Never Wanted', description: 'Police will never pursue player.', category: 'Players', group: 'Gifting', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_give_super_jump', name: 'Give Super Jump', description: 'Grant super jump to player.', category: 'Players', group: 'Gifting', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_give_super_run', name: 'Give Super Run', description: 'Grant super speed to player.', category: 'Players', group: 'Gifting', type: 'toggle', value: false, origin: 'System' },

  { id: 'player_tp_to', name: 'Teleport to Player', description: 'Move to player position.', category: 'Players', group: 'Teleportation', type: 'trigger', origin: 'System' },
  { id: 'player_tp_here', name: 'Teleport Player to Me', description: 'Bring player to you.', category: 'Players', group: 'Teleportation', type: 'trigger', origin: 'System' },
  { id: 'player_tp_island', name: 'Send to Island', description: 'Warp player to Cayo Perico.', category: 'Players', group: 'Teleportation', type: 'trigger', origin: 'System' },

  { id: 'player_copy_outfit', name: 'Copy Outfit', description: 'Steal player clothing.', category: 'Players', group: 'Appearance', type: 'trigger', origin: 'System' },
  { id: 'player_send_message', name: 'Send Message', description: 'Send remote text message.', category: 'Players', group: 'Misc', type: 'trigger', origin: 'System' },
  { id: 'player_bounty', name: 'Set Bounty', description: 'Place a bounty on player.', category: 'Players', group: 'Misc', type: 'trigger', origin: 'System' },
  { id: 'player_ceo_kick', name: 'CEO Kick', description: 'Force player out of CEO/MC.', category: 'Players', group: 'Misc', type: 'trigger', origin: 'System' },
  { id: 'player_apartment_invite', name: 'Apartment Invite', description: 'Force invite player to apartment.', category: 'Players', group: 'Misc', type: 'trigger', origin: 'System' },
  { id: 'player_ram_with_vehicle', name: 'Ram with Vehicle', description: 'Spawn vehicle to ram player.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_water_loop', name: 'Water Loop', description: 'Infinite water geyser on player.', category: 'Players', group: 'Trolling', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_fire_loop', name: 'Fire Loop', description: 'Infinite fire geyser on player.', category: 'Players', group: 'Trolling', type: 'toggle', value: false, origin: 'System' },
  { id: 'player_freeze_vehicle', name: 'Freeze Vehicle', description: 'Stop player vehicle instantly.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_burst_tires', name: 'Burst Tires', description: 'Pop all tires on player vehicle.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_kick_from_vehicle', name: 'Kick from Vehicle', description: 'Force player out of their car.', category: 'Players', group: 'Trolling', type: 'trigger', origin: 'System' },
  { id: 'player_force_drunk', name: 'Force Drunk', description: 'Apply drunk effect to player.', category: 'Players', group: 'Trolling', type: 'toggle', value: false, origin: 'System' },

  // 7. Settings / Config
  { id: 'ui_color', name: 'UI Color', description: 'Change menu accent color.', category: 'Settings', group: 'UI', type: 'trigger', origin: 'System' },
  { id: 'ui_size', name: 'UI Size', description: 'Change menu scale.', category: 'Settings', group: 'UI', type: 'slider', value: 1, origin: 'System' },
  { id: 'ui_font', name: 'UI Font', description: 'Change menu font style.', category: 'Settings', group: 'UI', type: 'trigger', origin: 'System' },
  { id: 'ui_pos', name: 'UI Position', description: 'Change menu screen position.', category: 'Settings', group: 'UI', type: 'trigger', origin: 'System' },
  { id: 'settings_sounds', name: 'Menu Sounds', description: 'Enable navigation sounds.', category: 'Settings', group: 'General', type: 'toggle', value: true, origin: 'System' },
  { id: 'settings_animations', name: 'Menu Animations', description: 'Enable smooth transitions.', category: 'Settings', group: 'General', type: 'toggle', value: true, origin: 'System' },
  { id: 'settings_logging', name: 'Console Logging', description: 'Log actions to console.', category: 'Settings', group: 'General', type: 'toggle', value: true, origin: 'System' },
  { id: 'settings_autosave', name: 'Auto-Save Config', description: 'Save settings on exit.', category: 'Settings', group: 'General', type: 'toggle', value: false, origin: 'System' },
  { id: 'cloud_sync_enabled', name: 'Cloud Offset Sync', description: 'Auto-update offsets from server.', category: 'Settings', group: 'Cloud Sync', type: 'toggle', value: true, origin: 'System' },
  { id: 'cloud_check_updates', name: 'Check for Updates', description: 'Force check for new game offsets.', category: 'Settings', group: 'Cloud Sync', type: 'trigger', origin: 'System' },
  { id: 'cloud_beta_offsets', name: 'Use Beta Offsets', description: 'Access experimental game patches.', category: 'Settings', group: 'Cloud Sync', type: 'toggle', value: false, origin: 'System' },
  { id: 'cloud_auto_patch', name: 'Auto-Patch Engine', description: 'Live patch game memory on update.', category: 'Settings', group: 'Cloud Sync', type: 'toggle', value: true, origin: 'System' },

  { id: 'theme_color', name: 'Customize Colors', description: 'Change menu accent color.', category: 'Settings', group: 'Themes', type: 'trigger', origin: 'System' },
  { id: 'theme_font', name: 'Customize Fonts', description: 'Change menu typography.', category: 'Settings', group: 'Themes', type: 'trigger', origin: 'System' },

  { id: 'profile_legit', name: 'Save/Load Legit Profile', description: 'Subtle modding settings.', category: 'Settings', group: 'Profiles', type: 'trigger', origin: 'System' },
  { id: 'profile_blatant', name: 'Save/Load Blatant Profile', description: 'Full power modding settings.', category: 'Settings', group: 'Profiles', type: 'trigger', origin: 'System' },
  { id: 'settings_reset', name: 'Reset to Defaults', description: 'Wipe all custom settings.', category: 'Settings', group: 'Profiles', type: 'trigger', origin: 'System' },

  // Lobby
  { id: 'lobby_weather', name: 'Force Weather', description: 'Force weather for everyone.', category: 'Lobby', group: 'Environment', type: 'trigger', origin: 'System' },
  { id: 'lobby_time', name: 'Force Time', description: 'Force time for everyone.', category: 'Lobby', group: 'Environment', type: 'trigger', origin: 'System' },
  { id: 'lobby_blackout', name: 'Session Blackout', description: 'Turn off all city lights.', category: 'Lobby', group: 'Environment', type: 'toggle', value: false, origin: 'System' },
  { id: 'mass_lightning', name: 'Mass Lightning', description: 'Trigger constant lightning strikes.', category: 'Lobby', group: 'Environment', type: 'toggle', value: false, origin: 'System' },
  { id: 'snow_mode', name: 'Snow Mode', description: 'Enable snow for the whole session.', category: 'Lobby', group: 'Environment', type: 'toggle', value: false, origin: 'System' },

  { id: 'lobby_kick_all', name: 'Kick All Players', description: 'Empty the session.', category: 'Lobby', group: 'Mass Actions', type: 'trigger', origin: 'System' },
  { id: 'crash_all', name: 'Crash All', description: 'Attempt to crash everyone in the lobby.', category: 'Lobby', group: 'Mass Actions', type: 'trigger', origin: 'System' },
  { id: 'freeze_all', name: 'Freeze All', description: 'Freeze every player in place.', category: 'Lobby', group: 'Mass Actions', type: 'toggle', value: false, origin: 'System' },
  { id: 'explode_all', name: 'Explode All', description: 'Create explosions at every player.', category: 'Lobby', group: 'Mass Actions', type: 'trigger', origin: 'System' },
  { id: 'fire_all', name: 'Set All on Fire', description: 'Ignite every player in the session.', category: 'Lobby', group: 'Mass Actions', type: 'toggle', value: false, origin: 'System' },
  
  { id: 'tp_all_me', name: 'Teleport All to Me', description: 'Bring everyone to your location.', category: 'Lobby', group: 'Teleportation', type: 'trigger', origin: 'System' },
  { id: 'tp_all_island', name: 'Send All to Island', description: 'Warp everyone to Cayo Perico.', category: 'Lobby', group: 'Teleportation', type: 'trigger', origin: 'System' },
  { id: 'tp_all_waypoint', name: 'Send All to Waypoint', description: 'Warp everyone to your waypoint.', category: 'Lobby', group: 'Teleportation', type: 'trigger', origin: 'System' },

  { id: 'give_all_weapons', name: 'Give All Weapons', description: 'Arm every player in the session.', category: 'Lobby', group: 'Equipment', type: 'trigger', origin: 'System' },
  { id: 'remove_all_weapons', name: 'Remove All Weapons', description: 'Disarm every player in the session.', category: 'Lobby', group: 'Equipment', type: 'trigger', origin: 'System' },

  { id: 'block_joiners', name: 'Block Joiners', description: 'Prevent new players from joining.', category: 'Lobby', group: 'Session Control', type: 'toggle', value: false, origin: 'System' },
  { id: 'block_invites', name: 'Block Invites', description: 'Prevent players from sending invites.', category: 'Lobby', group: 'Session Control', type: 'toggle', value: false, origin: 'System' },

  // Lua
  { id: 'lua_load', name: 'Load Lua Script', description: 'Execute external script.', category: 'Lua', group: 'Scripts', type: 'trigger', origin: 'System' },
  { id: 'lua_reload', name: 'Reload All', description: 'Refresh script folder.', category: 'Lua', group: 'Scripts', type: 'trigger', origin: 'System' },

  // Misc
  { id: 'misc_skip_cutscenes', name: 'Skip Cutscenes', description: 'Instantly skip cinematics.', category: 'Misc', group: 'Utility', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_fast_run', name: 'Fast Run', description: 'Run like Flash.', category: 'Misc', group: 'Utility', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_freecam', name: 'Freecam', description: 'Detached camera mode.', category: 'Misc', group: 'Utility', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_mobile_radio', name: 'Mobile Radio', description: 'Listen to radio outside vehicles.', category: 'Misc', group: 'Audio', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_radio_skip', name: 'Skip Radio Track', description: 'Skip current song.', category: 'Misc', group: 'Audio', type: 'trigger', origin: 'System' },
  { id: 'misc_fov', name: 'Field of View', description: 'Adjust camera FOV.', category: 'Misc', group: 'Camera', type: 'slider', value: 75, origin: 'System' },
  { id: 'misc_zoom', name: 'Camera Zoom', description: 'Adjust camera distance.', category: 'Misc', group: 'Camera', type: 'slider', value: 5, origin: 'System' },
  { id: 'misc_slow_mo', name: 'Slow Motion', description: 'Slow down game time.', category: 'Misc', group: 'Game Speed', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_fast_mo', name: 'Fast Motion', description: 'Speed up game time.', category: 'Misc', group: 'Game Speed', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_hide_hud', name: 'Hide HUD', description: 'Remove all UI elements.', category: 'Misc', group: 'Interface', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_show_fps', name: 'Show FPS', description: 'Display frame rate.', category: 'Misc', group: 'Interface', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_auto_deposit', name: 'Auto Deposit Cash', description: 'Automatically move cash to bank.', category: 'Misc', group: 'Automation', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_auto_accept', name: 'Auto Accept Invites', description: 'Join jobs automatically.', category: 'Misc', group: 'Automation', type: 'toggle', value: false, origin: 'System' },
  { id: 'misc_disclaimer', name: 'Show Disclaimer', description: 'Show startup warning.', category: 'Misc', group: 'System', type: 'toggle', value: true, origin: 'System' },
  { id: 'misc_reset_config', name: 'Reset Configuration', description: 'Restore default settings.', category: 'Misc', group: 'System', type: 'trigger', origin: 'System' },

  // Recovery
  { id: 'casino_rigging', name: 'Casino Rigging', description: 'Rig slot machines and lucky wheel (Safe use only).', category: 'Recovery', group: 'Cash', type: 'toggle', value: false, origin: 'System' },
  { id: 'nc_loop', name: 'Nightclub Loop', description: 'Automated nightclub earnings loop.', category: 'Recovery', group: 'Cash', type: 'toggle', value: false, origin: 'System' },
  { id: 'money_loop_10k', name: '10k Money Loop', description: 'Add 10k every second.', category: 'Recovery', group: 'Cash', type: 'toggle', value: false, origin: 'System' },
  { id: 'money_loop_50k', name: '50k Money Loop', description: 'Add 50k every second.', category: 'Recovery', group: 'Cash', type: 'toggle', value: false, origin: 'System' },
  { id: 'money_stealth', name: 'Stealth Money', description: 'Silent background money.', category: 'Recovery', group: 'Cash', type: 'toggle', value: false, origin: 'System' },
  { id: 'casino_chips', name: 'Add Casino Chips', description: 'Instantly add 2.5M chips.', category: 'Recovery', group: 'Cash', type: 'trigger', origin: 'System' },

  { id: 'stats_total_earned', name: 'Set Total Earned', description: 'Modify total money earned stat.', category: 'Recovery', group: 'Stats', type: 'trigger', origin: 'System' },
  { id: 'stats_total_spent', name: 'Set Total Spent', description: 'Modify total money spent stat.', category: 'Recovery', group: 'Stats', type: 'trigger', origin: 'System' },
  { id: 'stats_skills', name: 'Max All Skills', description: 'Max out stamina, strength, shooting, etc.', category: 'Recovery', group: 'Stats', type: 'trigger', origin: 'System' },
  { id: 'rp_multiplier', name: 'RP Multiplier', description: 'Multiply all RP earned.', category: 'Recovery', group: 'Stats', type: 'slider', value: 1, origin: 'System' },
  { id: 'crew_rank_set', name: 'Set Crew Rank', description: 'Change your crew level.', category: 'Recovery', group: 'Stats', type: 'slider', value: 1, origin: 'System' },
  { id: 'rank_set', name: 'Set Rank', description: 'Change your level.', category: 'Recovery', group: 'Stats', type: 'slider', value: 100, origin: 'System' },
  { id: 'kd_set', name: 'Set K/D Ratio', description: 'Modify your kill/death ratio.', category: 'Recovery', group: 'Stats', type: 'slider', value: 1.5, origin: 'System' },
  { id: 'max_skills', name: 'Max All Skills', description: 'Max out stamina, strength, etc.', category: 'Recovery', group: 'Stats', type: 'trigger', origin: 'System' },
  { id: 'clear_bad_sport', name: 'Clear Bad Sport', description: 'Reset bad sport status.', category: 'Recovery', group: 'Stats', type: 'trigger', origin: 'System' },

  { id: 'unlock_tattoos', name: 'Unlock Tattoos', description: 'Unlock all restricted tattoos.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_weapons', name: 'Unlock Weapons', description: 'Unlock all weapons and skins.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_rims', name: 'Unlock Chrome Rims', description: 'Unlock all chrome rim options.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_lsc', name: 'Unlock LSC Upgrades', description: 'Unlock all vehicle performance parts.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_trophies', name: 'Unlock Heist Trophies', description: 'Unlock all heist-related trophies.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_all', name: 'Unlock All', description: 'Unlock all items/achievements.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_clothing', name: 'Unlock Clothing', description: 'Unlock all restricted clothes.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_heists', name: 'Unlock Heist Items', description: 'Unlock all heist-locked items.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'unlock_awards', name: 'Unlock All Awards', description: 'Receive all social club awards.', category: 'Recovery', group: 'Unlocks', type: 'trigger', origin: 'System' },
  { id: 'recovery_money_loop', name: 'Money Loop (10M/s)', description: 'Safe money generation.', category: 'Recovery', group: 'Money', type: 'toggle', value: false, origin: 'System' },
  { id: 'recovery_rp_loop', name: 'RP Loop', description: 'Fast rank generation.', category: 'Recovery', group: 'Stats', type: 'toggle', value: false, origin: 'System' },
  { id: 'recovery_transaction_log', name: 'Transaction Log', description: 'Show all money transactions.', category: 'Recovery', group: 'Money', type: 'toggle', value: true, origin: 'System' },

  { id: 'heist_board_editor', name: 'Heist Board Editor', description: 'Modify loot and skip preps for Cayo/Casino.', category: 'Recovery', group: 'Heists', type: 'trigger', origin: 'System' },
  { id: 'heist_cayo', name: 'Instant Cayo Setup', description: 'Skip all Cayo Perico preps.', category: 'Recovery', group: 'Heists', type: 'trigger', origin: 'System' },
  { id: 'heist_casino', name: 'Instant Casino Setup', description: 'Skip all Diamond Casino preps.', category: 'Recovery', group: 'Heists', type: 'trigger', origin: 'System' },
  { id: 'heist_doomsday', name: 'Instant Doomsday Setup', description: 'Skip all Doomsday preps.', category: 'Recovery', group: 'Heists', type: 'trigger', origin: 'System' },

  // Bunker
  { id: 'bunker_supply', name: 'Auto Supply Bunker', description: 'Keep bunker supplies full.', category: 'Recovery', group: 'Bunker', type: 'toggle', value: false, origin: 'System' },
  { id: 'bunker_stock', name: 'Max Bunker Stock', description: 'Instantly fill bunker stock.', category: 'Recovery', group: 'Bunker', type: 'trigger', origin: 'System' },
  { id: 'bunker_sell', name: 'Instant Sell Bunker', description: 'Sell stock without delivery.', category: 'Recovery', group: 'Bunker', type: 'trigger', origin: 'System' },

  // Nightclub
  { id: 'nc_supply', name: 'Auto Supply Nightclub', description: 'Keep nightclub goods flowing.', category: 'Recovery', group: 'Nightclub', type: 'toggle', value: false, origin: 'System' },
  { id: 'nc_stock', name: 'Max Nightclub Stock', description: 'Fill all warehouse goods.', category: 'Recovery', group: 'Nightclub', type: 'trigger', origin: 'System' },
  { id: 'nc_sell', name: 'Instant Sell Nightclub', description: 'Sell all nightclub stock instantly.', category: 'Recovery', group: 'Nightclub', type: 'trigger', origin: 'System' },
  { id: 'nc_popularity', name: 'Max Popularity', description: 'Set nightclub popularity to 100%.', category: 'Recovery', group: 'Nightclub', type: 'trigger', origin: 'System' },
  { id: 'nc_safe', name: 'Fill Nightclub Safe', description: 'Add max cash to wall safe.', category: 'Recovery', group: 'Nightclub', type: 'trigger', origin: 'System' },

  // MC Businesses
  { id: 'mc_supply', name: 'Auto Supply MC', description: 'Resupply all MC businesses.', category: 'Recovery', group: 'MC Businesses', type: 'toggle', value: false, origin: 'System' },
  { id: 'mc_stock', name: 'Max MC Stock', description: 'Fill all active MC businesses.', category: 'Recovery', group: 'MC Businesses', type: 'trigger', origin: 'System' },
  { id: 'mc_sell', name: 'Instant Sell MC', description: 'Sell all MC stock instantly.', category: 'Recovery', group: 'MC Businesses', type: 'trigger', origin: 'System' },

  // Hangar
  { id: 'hangar_supply', name: 'Auto Supply Hangar', description: 'Keep hangar cargo incoming.', category: 'Recovery', group: 'Hangar', type: 'toggle', value: false, origin: 'System' },
  { id: 'hangar_stock', name: 'Max Hangar Stock', description: 'Fill hangar with high-value cargo.', category: 'Recovery', group: 'Hangar', type: 'trigger', origin: 'System' },
  { id: 'hangar_sell', name: 'Instant Sell Hangar', description: 'Sell hangar cargo instantly.', category: 'Recovery', group: 'Hangar', type: 'trigger', origin: 'System' },

  // CEO Cargo
  { id: 'ceo_supply', name: 'Auto Supply CEO', description: 'Keep warehouse crates incoming.', category: 'Recovery', group: 'CEO Cargo', type: 'toggle', value: false, origin: 'System' },
  { id: 'ceo_stock', name: 'Max CEO Cargo', description: 'Fill warehouse with special cargo.', category: 'Recovery', group: 'CEO Cargo', type: 'trigger', origin: 'System' },
  { id: 'ceo_sell', name: 'Instant Sell Cargo', description: 'Sell CEO cargo instantly.', category: 'Recovery', group: 'CEO Cargo', type: 'trigger', origin: 'System' },

  // Import/Export
  { id: 'ie_supply', name: 'Auto Supply I/E', description: 'Keep vehicle warehouse incoming.', category: 'Recovery', group: 'Import/Export', type: 'toggle', value: false, origin: 'System' },
  { id: 'ie_stock', name: 'Fill Vehicle Warehouse', description: 'Fill warehouse with top range cars.', category: 'Recovery', group: 'Import/Export', type: 'trigger', origin: 'System' },
  { id: 'ie_sell', name: 'Instant Sell Vehicle', description: 'Sell vehicle without delivery.', category: 'Recovery', group: 'Import/Export', type: 'trigger', origin: 'System' },

  // Visuals
  { id: 'esp_box', name: 'ESP Box', description: 'Draw boxes around players.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_line', name: 'ESP Snaplines', description: 'Draw lines to players.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_name', name: 'ESP Name', description: 'Show player names.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_health', name: 'ESP Health Bar', description: 'Show player health.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_skeleton', name: 'ESP Skeleton', description: 'Draw player bones.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_chams', name: 'Chams', description: 'Colored player models through walls.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_distance', name: 'ESP Distance', description: 'Show distance to players.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_weapon', name: 'ESP Weapon', description: 'Show current weapon of players.', category: 'Visuals', group: 'ESP', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_vehicle', name: 'Vehicle ESP', description: 'Show nearby vehicles.', category: 'Visuals', group: 'World', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_ped', name: 'Ped ESP', description: 'Show nearby NPCs.', category: 'Visuals', group: 'World', type: 'toggle', value: false, origin: 'System' },
  { id: 'esp_box_type', name: 'Box Type', description: '2D or 3D boxes.', category: 'Visuals', group: 'Settings', type: 'trigger', origin: 'System' },
  { id: 'esp_color', name: 'ESP Color', description: 'Change ESP color.', category: 'Visuals', group: 'Settings', type: 'trigger', origin: 'System' },

  // Aimbot
  { id: 'aim_toggle', name: 'Aimbot Toggle', description: 'Enable aim assistance.', category: 'Aimbot', group: 'Aimbot', type: 'toggle', value: false, origin: 'System' },
  { id: 'aim_fov', name: 'Aimbot FOV', description: 'Field of view for aimbot.', category: 'Aimbot', group: 'Aimbot', type: 'slider', value: 10, origin: 'System' },
  { id: 'aim_smooth', name: 'Aimbot Smoothing', description: 'How smooth the aim is.', category: 'Aimbot', group: 'Aimbot', type: 'slider', value: 5, origin: 'System' },
  { id: 'aim_silent', name: 'Silent Aim', description: 'Shoot without aiming directly.', category: 'Aimbot', group: 'Advanced', type: 'toggle', value: false, origin: 'System' },
  { id: 'aim_trigger', name: 'Triggerbot', description: 'Auto-shoot when crosshair is on target.', category: 'Aimbot', group: 'Advanced', type: 'toggle', value: false, origin: 'System' },
  { id: 'aim_bone', name: 'Aim Bone', description: 'Target specific body part.', category: 'Aimbot', group: 'Settings', type: 'trigger', origin: 'System' },
  { id: 'aim_key', name: 'Aim Key', description: 'Key to activate aimbot.', category: 'Aimbot', group: 'Settings', type: 'trigger', origin: 'System' },

  // Lua
  { id: 'lua_load_script', name: 'Load Script', description: 'Load a .lua script from the scripts folder.', category: 'Lua', group: 'Script Manager', type: 'trigger', origin: 'System' },
  { id: 'lua_script_list', name: 'Script List', description: 'Manage and run your Lua scripts.', category: 'Lua', group: 'Script Manager', type: 'trigger', origin: 'System' },
  { id: 'lua_auto_run', name: 'Auto-Run Scripts', description: 'Automatically run scripts on startup.', category: 'Lua', group: 'Script Manager', type: 'toggle', value: false, origin: 'System' },
  { id: 'lua_reload_all', name: 'Reload All Scripts', description: 'Refresh and restart all active scripts.', category: 'Lua', group: 'Script Manager', type: 'trigger', origin: 'System' },
  
  { id: 'lua_console', name: 'Show Console', description: 'Display the Lua output console.', category: 'Lua', group: 'Developer', type: 'toggle', value: false, origin: 'System' },
  { id: 'lua_dev_mode', name: 'Developer Mode', description: 'Enable advanced debugging features.', category: 'Lua', group: 'Developer', type: 'toggle', value: false, origin: 'System' },
  { id: 'lua_clear_console', name: 'Clear Console', description: 'Clear all log messages.', category: 'Lua', group: 'Developer', type: 'trigger', origin: 'System' },
];
