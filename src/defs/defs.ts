
export class DefFunction {
    name: string;
    decl: string;
    callon: string;
    desc: string;
    reqArgs: string[];
    optArgs: string[];
	example: string;

	constructor () {
        this.name = "";
        this.decl = "";
        this.callon = "";
        this.desc = "";
        this.reqArgs = [];
        this.optArgs = [];
        this.example = "";
    }
}

export let defs: Array<DefFunction> = new Array<DefFunction>();

let tmpDef: DefFunction = new DefFunction;
tmpDef.name = "adsButtonPressed";
tmpDef.decl = "adsButtonPressed()";
tmpDef.desc = "Check if the player is pressing the 'ads' button.";
tmpDef.callon = "The player";
tmpDef.example = "while (self ADSButtonPressed())...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowADS";
tmpDef.decl = "allowADS(<player ads>)";
tmpDef.desc = "Sets whether the player can switch to ADS";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowADS(false);";
tmpDef.reqArgs = [	"1 : <player ads>: A boolean. true if the player can switch to ADS, and false otherwise."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowCrouch";
tmpDef.decl = "allowCrouch(<player crouch>)";
tmpDef.desc = "Sets whether the player can crouch";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowCrouch(false);";
tmpDef.reqArgs = [	"1 : <player crouch>: A boolean. true if the player can crouch, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowJump";
tmpDef.decl = "allowJump(<player jump>)";
tmpDef.desc = "Sets whether the player can jump";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowJump(false);";
tmpDef.reqArgs = [	"1 : <player jump>: A boolean. True if the player can jump, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowLean";
tmpDef.decl = "allowLean(<player lean left>)";
tmpDef.desc = "Sets whether the player can lean";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowLean(false);";
tmpDef.reqArgs = [	"1 : <player lean>: A boolean. true if the player can lean, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowLeanLeft";
tmpDef.decl = "allowLeanLeft(<player lean left>)";
tmpDef.desc = "Sets whether the player can lean left";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowLeanLeft(false);";
tmpDef.reqArgs = [	"1 : <player lean left>: A boolean. True if the player can lean left, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowLeanRight";
tmpDef.decl = "allowLeanRight(<player lean right>)";
tmpDef.desc = "Sets whether the player can lean right";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowLeanRight(false);";
tmpDef.reqArgs = [	"1 : <player lean right>: A boolean. true if the player can lean right, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowMelee";
tmpDef.decl = "allowMelee(<melee>)";
tmpDef.desc = "Sets whether the player can melee";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowMelee(false);";
tmpDef.reqArgs = [	"1 : <melee>: A boolean. True if the player can melee, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowProne";
tmpDef.decl = "allowProne(<player prone>)";
tmpDef.desc = "Sets whether the player can go prone";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowProne(false);";
tmpDef.reqArgs = [	"1 : <player prone>: A boolean. true if the player can go prone, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowSprint";
tmpDef.decl = "allowSprint(<player sprint>)";
tmpDef.desc = "Sets whether the player can sprint";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowSprint(false);";
tmpDef.reqArgs = [	"1 : <player sprint>: A boolean. True if the player can sprint, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "allowStand";
tmpDef.decl = "allowStand(<player stand>)";
tmpDef.desc = "Sets whether the player can stand up";
tmpDef.callon = "The player";
tmpDef.example = "level.player AllowStand(false);";
tmpDef.reqArgs = [	"1 : <player stand>: A boolean. true if the player can stand, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "anyAmmoForWeaponModes";
tmpDef.decl = "anyAmmoForWeaponModes(<weapon name>)";
tmpDef.desc = "Returns true if the player has any ammo available for the weapon or any of it's alt-modes (grenade launcher, etc).";
tmpDef.callon = "The player";
tmpDef.example = "if (level.player AnyAmmoForWeaponModes(\"m4_grenadier\")) [...]";
tmpDef.reqArgs = [	"1 : <weapon name>: (string) The weapon name for this weapon."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "attackButtonPressed";
tmpDef.decl = "attackButtonPressed()";
tmpDef.callon = "The player";
tmpDef.example = "if (self AttackButtonPressed()) ...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "buttonPressed";
tmpDef.decl = "buttonPressed(<buttonName>)";
tmpDef.desc = "Check if the host is pressing the button/key, \"BUTTON_A\", \"BUTTON_B\", \"K";
tmpDef.callon = "The player (it will only check the host player's buttons though)";
tmpDef.example = "while (self ButtonPressed(\"BUTTON_A\")) ...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "clearPerks";
tmpDef.decl = "clearPerks()";
tmpDef.desc = "removes all perks for a player";
tmpDef.callon = "A player";
tmpDef.example = "player ClearPerks();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "closeMenu";
tmpDef.decl = "closeMenu()";
tmpDef.desc = "Close the current player menu";
tmpDef.callon = "The player";
tmpDef.example = "player CloseMenu();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "deactivateChannelVolumes";
tmpDef.decl = "deactivateChannelVolumes(<priority>, <fade time>)";
tmpDef.desc = "deactivate the channel volumes for the player on the given priority level";
tmpDef.callon = "The player";
tmpDef.example = "level.player DeactivateChannelVolumes(\"snd_enveffectsprio_level\", 3);";
// tslint:disable-next-line:max-line-length
tmpDef.reqArgs = [	"1 : <priority>: Valid priorities are \"snd_channelvolprio_holdbreath\", \"snd_channelvolprio_pain\", or \"snd_channelvolprio_shellshock\"."];
tmpDef.optArgs = [	"1 : <fade time>: the time spent fading to the next lowest active channelvol priority level in seconds."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "deactivateEQ";
tmpDef.decl = "deactivateEQ(<eqIndex>, <channelName>, <band>)";
tmpDef.desc = "Deactivate the specified eq filter for the specified band";
tmpDef.callon = "The player";
tmpDef.example = "level.player DeactivateEQ(0, \"local\", 0);";
tmpDef.reqArgs = [	"1 : <eqIndex> : which eq index to deactivate (0,1)"];
tmpDef.optArgs = [	"1 : <channelName>: the name of the channel.  channel names are specified in \"channels.def\"",
					"2 : <band>: select which band to disable.  There are currently three bands (0,1,2)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "deactivateReverb";
tmpDef.decl = "deactivateReverb(<priority>, <fade time>)";
tmpDef.desc = "deactivate the sound reverberation for the player on the given priority level";
tmpDef.callon = "The player";
tmpDef.example = "level.player DeactivateReverb(\"snd_enveffectsprio_level\", 3);";
tmpDef.reqArgs = [	"1 : <priority>: Valid priorities are \"snd_enveffectsprio_level\" or \"snd_enveffectsprio_shellshock\"."];
tmpDef.optArgs = [	"1 : <fade time>: the time spent fading to the next lowest active reverb priority level in seconds."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "disableInvulnerability";
tmpDef.decl = "disableInvulnerability()";
tmpDef.desc = "Makes player vulnerable to damage.  This is default behavior";
tmpDef.callon = "A Player";
tmpDef.example = "level.player DisableInvulnerability();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "disableTurretDismount";
tmpDef.decl = "disableTurretDismount()";
tmpDef.desc = "Do not let player unstick themselves from a turret that they are using.";
tmpDef.callon = "A Player";
tmpDef.example = "level.player DisableTurretDismount();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "disconnectPaths";
tmpDef.decl = "disconnectPaths()";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Disconnects the paths that intersect with the entity. If the entity is a script_brushmodel then it must have DYNAMICPATH set to disconnect paths.";
tmpDef.callon = "<entity> A dynamic blocking entity";
tmpDef.example = "level.ArmoredCar DisconnectPaths();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "distance";
tmpDef.decl = "distance(<point1>, <point2>)";
tmpDef.desc = "Returns the distance between two points";
tmpDef.example = "dist = Distance(org, ai[i].origin);";
tmpDef.reqArgs = [	"1 : <point1> The first point",
					"2 : <point2> The second point"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "enableHealthShield";
tmpDef.decl = "enableHealthShield(<enable>)";
tmpDef.desc = "Sets whether the player's health shield is active";
tmpDef.callon = "The player";
tmpDef.example = "level.player EnableHealthShield(false);";
tmpDef.reqArgs = [	"1 : <enable>: A boolean. true to enable the health shield, and false otherwise"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "enableInvulnerability";
tmpDef.decl = "enableInvulnerability()";
tmpDef.desc = "Makes player invulnerable to damage";
tmpDef.callon = "A Player";
tmpDef.example = "level.player EnableInvulnerability();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "enableTurretDismount";
tmpDef.decl = "enableTurretDismount()";
tmpDef.desc = "Player can dismount from turrets as normal.";
tmpDef.callon = "A Player";
tmpDef.example = "level.player EnableTurretDismount();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "fragButtonPressed";
tmpDef.decl = "fragButtonPressed()";
tmpDef.callon = "The player";
tmpDef.example = "if (self FragButtonPressed()) ...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "freezeControls";
tmpDef.decl = "freezeControls(<freeze state>)";
tmpDef.desc = "Blocks or unblocks control input from this player";
tmpDef.callon = "The player";
tmpDef.example = "level.player freezeControls(true);";
tmpDef.reqArgs = [	"1 : <freeze state>: true if the player's controls are frozen, false otherwise."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getCurrentOffhand";
tmpDef.decl = "getCurrentOffhand()";
tmpDef.desc = "Gets the player's current off-hand weapon(usually a grenade).";
tmpDef.callon = "The player";
tmpDef.example = "currentweapon = level.player GetCurrentOffhand();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getCurrentWeapon";
tmpDef.decl = "getCurrentWeapon(<weapon name>)";
tmpDef.desc = "Gets the players current weapon.";
tmpDef.callon = "The player";
tmpDef.example = "currentweapon = level.player GetCurrentWeapon();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getCurrentWeaponClipAmmo";
tmpDef.decl = "getCurrentWeaponClipAmmo()";
tmpDef.desc = "Gets the amount of ammo left in the player's clip.";
tmpDef.callon = "The player";
tmpDef.example = "bulletCnt = level.player GetCurrentWeaponClipAmmo();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getFractionMaxAmmo";
tmpDef.decl = "getFractionMaxAmmo(<weapon name>)";
tmpDef.desc = "Return the player's current ammunition amount as a fraction of the weapon's maximum ammunition";
tmpDef.callon = "The player";
tmpDef.example = "self GetFractionMaxAmmo(\"m4_grenadier\");";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name (a string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getFractionStartAmmo";
tmpDef.decl = "getFractionStartAmmo(<weapon name>)";
tmpDef.desc = "Return the player's current ammunition amount as a fraction of the weapon's starting ammunition";
tmpDef.callon = "The player";
tmpDef.example = "self GetFractionStartAmmo(\"mosin_nagant\");";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name (a string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getNormalizedMovement";
tmpDef.decl = "getNormalizedMovement()";
tmpDef.desc = "Get the player's normalized movement vector.  Returns [-1,1] for X(forward) and Y(right) based on player's input.";
tmpDef.callon = "The player";
tmpDef.example = "movement = self GetNormalizedMovement();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getOffhandSecondaryClass";
tmpDef.decl = "getOffhandSecondaryClass()";
tmpDef.desc = "Gets the name (either \"smoke\" or \"flash\") that toggle is set to.";
tmpDef.callon = "The player";
tmpDef.example = "if (\"flash\" == level.player GetOffhandSecondaryClass())...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getPlayerAngles";
tmpDef.decl = "getPlayerAngles()";
tmpDef.desc = "Get the player's angles";
tmpDef.callon = "The player";
tmpDef.example = "angles = level.player GetPlayerAngles();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getPlayerViewHeight";
tmpDef.decl = "getPlayerViewHeight()";
tmpDef.desc = "Get the player's view height";
tmpDef.callon = "The player";
tmpDef.example = "height = level.player GetPlayerViewHeight();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getStance";
tmpDef.decl = "getStance()";
tmpDef.desc = "Gets the stance of the player. It only works for the player. Possible return values are 'crouch', 'prone' and 'stand'";
tmpDef.callon = "The player";
tmpDef.example = "if (level.player GetStance() == \"crouch\"))...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getVelocity";
tmpDef.decl = "getVelocity()";
tmpDef.desc = "Gets the player's velocity";
tmpDef.callon = "The player";
tmpDef.example = "vel = level.player GetVelocity();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getWeaponAmmoClip";
tmpDef.decl = "getWeaponAmmoClip(<weapon name>)";
tmpDef.desc = "Get the amount of ammo left in the player's weapon's current clip.";
tmpDef.callon = "The player";
tmpDef.example = "clipCount = level.player GetWeaponAmmoClip(\"uzi\");";
tmpDef.reqArgs = [	"1 : <weapon name>: (string) The weapon name for this weapon."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getWeaponAmmoStock";
tmpDef.decl = "getWeaponAmmoStock(<weapon name>)";
tmpDef.desc = "Get the ammunition stockpile for the given weapon.";
tmpDef.callon = "The player";
tmpDef.example = "clipCount = level.player GetWeaponAmmoStock(\"m4_grenadier\");";
tmpDef.reqArgs = [	"1 : <weapon name>: (string) The weapon name for this weapon."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getWeaponsList";
tmpDef.decl = "getWeaponsList()";
tmpDef.desc = "Gets an array of all weapons that the player has.  Includes any alt-mode weapons (ex: m203_m4)";
tmpDef.callon = "The player";
tmpDef.example = "weapList = level.player GetWeaponsList();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getWeaponsListPrimaries";
tmpDef.decl = "getWeaponsListPrimaries()";
tmpDef.desc = "Gets an array of all primary weapons that the player has.";
tmpDef.callon = "The player";
tmpDef.example = "weapList = level.player GetWeaponsListPrimaries();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getWeaponSlotAmmo";
tmpDef.decl = "getWeaponSlotAmmo(<weapon slot>)";
tmpDef.desc = "Gets the ammo count for the weapon in the given slot.";
tmpDef.callon = "The player";
tmpDef.example = "ammo = level.player GetWeaponSlotAmmo(\"primary\");";
tmpDef.reqArgs = [	"1 : <weapon slot>: Valid weaponslots are \"primary\" and \"primaryb\"."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getWeaponSlotClipAmmo";
tmpDef.decl = "getWeaponSlotClipAmmo(<weapon slot>)";
tmpDef.desc = "Gets the ammunition in the clip for the weapon in the given weapon slot.";
tmpDef.callon = "The player";
tmpDef.example = "ammo = level.player GetWeaponSlotClipAmmo(\"primary\");";
tmpDef.reqArgs = [	"1 : <weapon slot>: Valid weaponslots are \"primary\" and \"primaryb\"."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "getWeaponSlotWeapon";
tmpDef.decl = "getWeaponSlotWeapon(<weapon slot>)";
tmpDef.desc = "Gets the name of the weapon in the given weapon slot.";
tmpDef.callon = "The player";
tmpDef.example = "playerWeapon[0] = level.player GetWeaponSlotWeapon(\"primary\");";
tmpDef.reqArgs = [	"1 : <weapon slot>: Valid weaponslots are \"primary\" and \"primaryb\"."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "giveMaxAmmo";
tmpDef.decl = "giveMaxAmmo(<weapon name>)";
tmpDef.desc = "Set the player's ammunition to the weapon's maximum ammunition";
tmpDef.callon = "The player";
tmpDef.example = "self GiveMaxAmmo(self.pers[\"weapon\"]);";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name (a string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "giveStartAmmo";
tmpDef.decl = "giveStartAmmo(<weapon name>)";
tmpDef.desc = "Set the player's ammunition to the weapon's default starting ammunition";
tmpDef.callon = "The player";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name (a string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "giveWeapon";
tmpDef.decl = "giveWeapon(<weapon name>)";
tmpDef.desc = "Give the player a weapon.";
tmpDef.callon = "The player";
tmpDef.example = "level.player giveWeapon(\"m1garand\");";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name to give to the player."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "hasPerk";
tmpDef.decl = "hasPerk(<perk name>)";
tmpDef.desc = "test if player has a perk";
tmpDef.callon = "A player";
tmpDef.example = "player HasPerk(\"specialty_gpsjammer\");";
tmpDef.reqArgs = [	"1 : <perk name> the perk to check"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "hasWeapon";
tmpDef.decl = "hasWeapon(<weapon name>)";
tmpDef.desc = "Checks whether the player has the given weapon.";
tmpDef.callon = "The player";
tmpDef.example = "if (level.player HasWeapon(\"Panzerfaust\")) [...]";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name (a string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "hideViewModel";
tmpDef.decl = "hideViewModel()";
tmpDef.desc = "Hide the player's current view model.";
tmpDef.callon = "The player";
tmpDef.example = "level.player HideViewModel();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "isFiring";
tmpDef.decl = "isFiring()";
tmpDef.desc = "Returns true if the player is currently using a weapon";
tmpDef.callon = "The player";
tmpDef.example = "level.player IsFiring()";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "isLookingAt";
tmpDef.decl = "isLookingAt(<entity>)";
tmpDef.desc = "Returns true if the entity is the same as the player's lookat entity.";
tmpDef.callon = "The player";
tmpDef.example = "level.player islookingat(trigger);";
tmpDef.reqArgs = [	"1 : <entity>: An entity."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "isMeleeing";
tmpDef.decl = "isMeleeing()";
tmpDef.desc = "Returns true if the player is currently meleeing";
tmpDef.callon = "The player";
tmpDef.example = "level.player IsMeleeing();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "isOnGround";
tmpDef.decl = "isOnGround()";
tmpDef.desc = "Returns true if the player is on the ground.";
tmpDef.callon = "The player";
tmpDef.example = "if (player IsOnGround());";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "isThrowingGrenade";
tmpDef.decl = "isThrowingGrenade()";
tmpDef.desc = "Returns true if the player is currently throwing a grenade";
tmpDef.callon = "The player";
tmpDef.example = "level.player IsThrowingGrenade();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "meleeButtonPressed";
tmpDef.decl = "meleeButtonPressed()";
tmpDef.callon = "The player";
tmpDef.example = "if (self MeleeButtonPressed()) ...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "notifyOnCommand";
tmpDef.decl = "notifyOnCommand(<notify>, <command>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Whenever the console command processor encounters <command> for any reason, it will notify script with the string <notify> on the player entity.  Additionally, it will pass the arguments to the notify as strings, where the first argument is the initiating command.";
tmpDef.callon = "The player";
tmpDef.example = "player NotifyOnCommand(\"changeweapon\", \"weapnext\"); waittill \"changeweapon\";";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_Add";
tmpDef.decl = "objective_Add(<objective_number>, <state>, <text>, <position>, <iconshader>)";
tmpDef.desc = "Adds a new objective ";
tmpDef.example = "Objective_Add(objective_number, \"active\", objective_text, (closest.bomb.origin));";
tmpDef.reqArgs = [	"1 : <objective_number> The number of the objective to add",
					// tslint:disable-next-line:max-line-length
					"2 : <state> A string value representing the state of the objective. Valid states are \"empty\", \"active\", \"invisible\", \"done\", \"current\" and \"failed\""];
tmpDef.optArgs = [	"1 : <text> The text to use for the objective. This should be a valid localized text reference ",
					"2 : <position> The position of the objective",
					"3 : <iconshader> The objective icon to embed"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_AdditionalCurrent";
tmpDef.decl = "objective_AdditionalCurrent(<objective_index>, <objective_index>, ...)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Add additional objective(s) to the set of objectives currently being done. If none specified, there's no effect.Current objectives that are not specified are not affected by this call. Meant to be used when there are already current objective(s), but one or more additional objectives need to be made current in addition to the previously current objectives.";
tmpDef.example = "Objective_AdditionalCurrent(level.flakObjectiveID);";
tmpDef.reqArgs = [	"1 : <objective_index> The ID of the objective to set current."];
tmpDef.optArgs = [	"1 : <objective_index> Any number of additional IDs to set current."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_AdditionalPosition";
tmpDef.decl = "objective_AdditionalPosition(<objective_index>, <position_index>, <position>)";
tmpDef.desc = "Set an additional position for objectives with multiple positions ";
tmpDef.example = "Objective_AdditionalPosition(level.mortarObjNumber, ent.index, nMortarCarrier.origin);";
tmpDef.reqArgs = [	"1 : <objective_index> The ID of the objective to alter",
					"2 : <position_index> The position of the objective",
					"3 : <position> The position of the objective"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_Current";
tmpDef.decl = "objective_Current(<objective_index>, <objective_index>, ...)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Set which objective(s) are currently being done. If none specified, there's no current objective. Current objectives that are not specified to still be current, are set to active.";
tmpDef.example = "Objective_Current(aHardpointObjectives[0].obj, aHardpointObjectives[1].obj, aHardpointObjectives[2].obj);";
tmpDef.reqArgs = [	"1 : <objective_index> The ID of the objective to set current."];
tmpDef.optArgs = [	"1 : <objective_index> Any number of additional IDs to set current."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_Delete";
tmpDef.decl = "objective_Delete(<objective_number>)";
tmpDef.desc = "Removes an objective";
tmpDef.example = "Objective_Delete(1);";
tmpDef.reqArgs = [	"1 : <objective_number> The number of the objective to remove"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_Icon";
tmpDef.decl = "objective_Icon(<objective_number>, <icon>)";
tmpDef.desc = "Set the compass icon for an objective ";
tmpDef.example = "Objective_Icon(0, game[\"radio_none\"]);";
tmpDef.reqArgs = [	"1 : <objective_number> The ID of the objective to alter",
					"2 : <icon> A compass icon"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_OnEntity";
tmpDef.decl = "objective_OnEntity(<objective_number>, <entity>)";
tmpDef.desc = "Sets the objective to get its position from an entity.";
tmpDef.reqArgs = [	"1 : <objective_number> The ID of the objective to alter",
					"2 : <entity> The entity to set the objective to"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_Position";
tmpDef.decl = "objective_Position(<objective_number>, <position>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Set the position of an objective, assumed to be the zeroth position, must use objective_additionalposition to set a different position index";
tmpDef.example = "Objective_Position(4, get_objective_position(\"plant_boilerbomb_trigger\"));";
tmpDef.reqArgs = [	"1 : <objective_number> The ID of the objective to alter",
					"2 : <position> The position of the objective"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_Ring";
tmpDef.decl = "objective_Ring(<objective_index>)";
tmpDef.desc = "Triggers a ring on the objective.";
tmpDef.example = "Objective_Ring(level.mortarObjNumber);";
tmpDef.reqArgs = [	"1 : <objective_index> The ID of the ring."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_State";
tmpDef.decl = "objective_State(<objective_number>, <state>)";
tmpDef.desc = "Sets the state of an objective";
tmpDef.example = "Objective_State(8, \"done\");";
tmpDef.reqArgs = [	"1 : <objective_number> The number of the objective to alter",
					// tslint:disable-next-line:max-line-length
					"2 : <state> A string value representing the state of the objective. Valid states are \"empty\", \"active\", \"invisible\", \"done\", \"current\" and \"failed\""];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_String";
tmpDef.decl = "objective_String(<objective_number>, <string>, ...)";
tmpDef.desc = "Set the description string for an objective ";
tmpDef.example = "Objective_String(index, &amp;\"SCRIPT_OBJ_DESTROYFLAKPANZERS\", level.flaks_remaining);";
tmpDef.reqArgs = [	"1 : <objective_number> The ID of the objective to alter",
					"2 : <string> One or more (localised) objective strings"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_String_NoMessage";
tmpDef.decl = "objective_String_NoMessage(<objective_number>, <string>, ...)";
tmpDef.desc = "Set the description string for an objective, without posting an \"objectives updated\" message ";
tmpDef.example = "Objective_String_NoMessage(index, &amp;\"SCRIPT_OBJ_DESTROYFLAKPANZERS\", level.flaks_remaining);";
tmpDef.reqArgs = [	"1 : <objective_number> The ID of the objective to alter",
					"2 : <string> One or more (localised) objective strings"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "objective_Team";
tmpDef.decl = "objective_Team(<objective_number>, <team>)";
tmpDef.desc = "Sets the team that the objective is for. Allows having different objectives for each team";
tmpDef.example = "Objective_Team(0, \"allies\");";
tmpDef.reqArgs = [	"1 : <objective_number> The ID of the objective to alter",
					"2 : <team> The team that the objective is for. Valid entries are 'allies', 'axis', or 'none'"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "openMenu";
tmpDef.decl = "openMenu(<menu>)";
tmpDef.desc = "Open a menu for this player";
tmpDef.callon = "The player";
tmpDef.example = "self OpenMenu(game[\"menu_weapon_allies_only\"]);";
tmpDef.reqArgs = [	"1 : <menu>: A string. The name of the menu to open"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "openMenuNoMouse";
tmpDef.decl = "openMenuNoMouse(<menu>)";
tmpDef.desc = "Open a menu for this player, with no mouse control.";
tmpDef.callon = "The player";
tmpDef.example = "self OpenMenuNoMouse(game[\"menu_weapon_allies_only\"]);";
tmpDef.reqArgs = [	"1 : <menu>: A string. The name of the menu to open"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "physicsExplosionCylinder";
tmpDef.decl = "physicsExplosionCylinder(<center>, <outer radius>, <inner radius>, <magnitude>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Imparts a 1-frame impulse on physics objects radially outward in a cylinder (i.e., all the added forces are parallel to the ground). This can be used to simulate wind from a helicopter.";
tmpDef.example = "PhysicsExplosionCylinder(origin, 50, 40, 1);";
tmpDef.reqArgs = [	"1 : <center> The world position of the center of the cylinder",
					"2 : <outer radius> The radius beyond which the force is zero",
					"3 : <inner radius> The radius within which the force is maximum",
					"4 : <magnitude> The strength of the force.  1 = the default explosion"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "physicsExplosionSphere";
tmpDef.decl = "physicsExplosionSphere(<position of explosion>, <outer radius>, <inner radius>, <magnitude>)";
tmpDef.desc = "Imparts a 1-frame explosion impulse on physics objects, similar to a grenade.";
tmpDef.example = "PhysicsExplosionSphere(origin, 100, 80, 1);";
tmpDef.reqArgs = [	"1 : <position of effect> The world position of the center of the explosion",
					"2 : <outer radius> The radius beyond which the force is zero",
					"3 : <inner radius> The radius within which the force is maximum",
					"4 : <magnitude> The strength of the force. 1 = the default explosion"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "physicsJitter";
tmpDef.decl = "physicsJitter(<center>, <outer radius>, <inner radius>, <min displacement>, <max displacement>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Jitters physics objects touching the ground.  Jitter forces are calculated in such a way as to displace the object upwards some height between min and max displacement at each point of contact with the ground.";
tmpDef.example = "PhysicsJitter(origin, 200, 150, 1.0, 5.0);";
tmpDef.reqArgs = [	"1 : <center> The world position of the center of the cylinder",
					"2 : <outer radius> The radius beyond which the displacement is zero",
					"3 : <inner radius> The radius within which the displacement is maximum",
					"4 : <min displacement> Approximate minimum distance each contact point will be displaced",
					"5 : <max displacement> Approximate maximum distance each contact point will be displaced"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "physicsJolt";
tmpDef.decl = "physicsJolt(<center>, <outer radius>, <inner radius>, <force>)";
tmpDef.desc = "Imparts a 1-frame randomly-jittered impulse on physics objects in a radius.";
tmpDef.example = "PhysicsJolt(origin, 200, 150, (0.01, 0.01, 0.2));";
tmpDef.reqArgs = [	"1 : <center> The world position of the center of the cylinder",
					"2 : <outer radius> The radius beyond which the force is zero",
					"3 : <inner radius> The radius within which the force is maximum",
					"4 : <force> A vector giving the direction and magnitude of the force of the explosion"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "pingPlayer";
tmpDef.decl = "pingPlayer()";
tmpDef.desc = "Flashes a player on their teammate's compasses";
tmpDef.callon = "A player";
tmpDef.example = "self PingPlayer();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "playerADS";
tmpDef.decl = "playerADS()";
tmpDef.desc = "Return the player's weapon position fraction.";
tmpDef.callon = "The player";
tmpDef.example = "while (self PlayerADS() > 0.3)...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "playerLinkTo";
tmpDef.decl = "playerLinkTo(<linkto entity>, <tag>, <viewpercentag fraction>, <right arc>, <left arc>, <top arc>, <bottom arc>, <collide>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Attaches the player to an entity.  Any entity rotation is added to the player's view, allow the player to look around.  Rotating the parent entity/tag will not move the player's eye position, but only the player's view angles.  Thus, the player's eye position is locked in place, always directly above the parent tag.";
tmpDef.callon = "A Player Entity";
tmpDef.example = "level.player PlayerLinkTo(vehicle, \"tag_player\", 0.5);";
tmpDef.reqArgs = [	"1 : <linkto entity> The entity to attach the player to."];
tmpDef.optArgs = [	"1 : <tag> The tag to attach the player to.",
					"2 : <view fraction> How much the change in the tag's rotation effects the players view.  Defaults to 0.",
					"3 : <right arc> Angle to clamp view to the right.  Defaults to 180.",
					"4 : <left arc> Angle to clamp view to the left.  Defaults to 180.",
					"5 : <top arc> Angle to clamp view to the top.  Defaults to 180.",
					"6 : <bottom arc> Angle to clamp view to the bottom.  Defaults to 180.",
					// tslint:disable-next-line:max-line-length
					"7 : <collide> true/false: Whether the player is to collide with geo, preventing the player from entering solid (but will try to keep the player as close as possible to the parent)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "playerLinkToAbsolute";
tmpDef.decl = "playerLinkToAbsolute(<lockto entity>, <tag>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Attaches the player to an entity.  No view movement is allowed.    The player's eye position will remain fixed relative to the parent entity/tag.  Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)";
tmpDef.callon = "A Player Entity";
tmpDef.example = "level.player PlayerLinkToAbsolute(vehicle, \"tag_player\");";
tmpDef.reqArgs = [	"1 : <lockto entity> The entity to attach the player to"];
tmpDef.optArgs = [	"1 : <tag> The tag to attach the player to"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "playerLinkToDelta";
// tslint:disable-next-line:max-line-length
tmpDef.decl = "playerLinkToDelta(<linkto entity>, <tag>, <viewpercentag fraction>, <right arc>, <left arc>, <top arc>, <bottom arc>, <use tag angles> )";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Attaches the player to an entity.  Any entity rotation is added to the player's view, allow the player to look around.  The player's eye position will remain fixed relative to the parent entity/tag.  Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)";
tmpDef.callon = "A Player Entity";
tmpDef.example = "level.player PlayerLinkToDelta(vehicle, \"tag_player\", 0.5);";
tmpDef.reqArgs = [	"1 : <linkto entity> The entity to attach the player to."];
tmpDef.optArgs = [	"1 : <tag> The tag to attach the player to.",
					"2 : <view fraction> How much the change in the tag's rotation effects the players view.  Defaults to 0.",
					"3 : <right arc> Angle to clamp view to the right.  Defaults to 180.",
					"4 : <left arc> Angle to clamp view to the left.  Defaults to 180.",
					"5 : <top arc> Angle to clamp view to the top.  Defaults to 180.",
					"6 : <bottom arc> Angle to clamp view to the bottom.  Defaults to 180.",
					// tslint:disable-next-line:max-line-length
					"7 : <use tag angles> Determines how the player's view will be tilted.  'False' (default) means that the orientation of the tag when the player is linked will appear flat to the player.  Any rotation from that orientation will tilt the player's view. 'True' means that only a tag angles of (0,0,0) will appear flat to the player.  Any rotation from (0,0,0) will tilt the player's view."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "playerSetGroundReferenceEnt";
tmpDef.decl = "playerSetGroundReferenceEnt(<ground reference entity>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "The ground entity's rotation will be added onto the player's view.  In particular, this will cause the player's yaw to rotate around the entity's z-axis instead of the world z-axis.  You only need to call this function once.  After that, any rotation that the reference entity undergoes will affect the player.  Call this command again with undefined to turn it off.";
tmpDef.callon = "A Player Entity";
tmpDef.example = "level.player PlayerSetGroundReferenceEnt(seaEnt);";
tmpDef.reqArgs = [	"1 : <ground reference entity> The entity used to rotate the player's view."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "playLocalSound";
tmpDef.decl = "playLocalSound(<sound name>)";
tmpDef.desc = "Plays a sound locally to the player";
tmpDef.callon = "The player";
tmpDef.example = "players[i] PlayLocalSound(\"MP_announcer_round_draw\");";
tmpDef.reqArgs = [	"1 : <sound name>: The name of the sound to play."];
tmpDef.optArgs = [	"1 : <notification string> If present, the sound will notify this string on this player when done. (Single player only)",
					// tslint:disable-next-line:max-line-length
					"2 : <stoppable flag> If present and true, then this sound can be interrupted by another playlocalsound command with notification string.  It is a script error for a playsound that does not have this flag set to get interrupted by another playlocalsound with notify, or for a playlocalsound with notify that does not have this flag set to interrupt another playlocalsound with notify. (Single player only)\""];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "refreshHUDAmmoCounter";
tmpDef.decl = "refreshHUDAmmoCounter()";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Causes the HUD ammo counter and actionslots to show, as if the player had fired or otherwise caused it to show.  Will fade out as normal.";
tmpDef.example = "RefreshHUDAmmoCounter();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "refreshHUDCompass";
tmpDef.decl = "refreshHUDCompass()";
tmpDef.desc = "Causes the HUD compass to show, as if the player had moved or otherwise caused it to show.  Will fade out as normal.";
tmpDef.example = "RefreshHUDCompass();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "resetSpreadOverride";
tmpDef.decl = "resetSpreadOverride()";
tmpDef.desc = "Resets the player spread value to the ones of the weapon in use.";
tmpDef.callon = "A player";
tmpDef.example = "level.player ResetSpreadOverride();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "rotateRoll";
tmpDef.decl = "rotateRoll(<roll angle>, <time>, <acceleration time>, <deceleration time>)";
tmpDef.desc = "Rotate this entity to the given roll angle";
tmpDef.callon = "script_model, script_origin or script_brushmodel";
tmpDef.example = "self RotateRoll((2 * 1500 + 3 * Randomfloat(2500)) * -1, 5, 0, 0);";
tmpDef.reqArgs = [	"1 : <roll angle> The new roll angle in degrees",
					"2 : <time> The time to rotate in seconds"];
tmpDef.optArgs = [	"1 : <acceleration time> The time spent accelerating in seconds",
					"2 : <deceleration time> The time spent decelerating in seconds"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "rotateTo";
tmpDef.decl = "rotateTo(<angles>, <time>, <acceleration time>, <deceleration time>)";
tmpDef.desc = "Rotate this entity to the given world rotation value";
tmpDef.callon = "script_model, script_origin or script_brushmodel";
tmpDef.example = "shutter RotateTo((shutter.angles[0], newYaw, shutter.angles[2]), newTime);";
tmpDef.reqArgs = [	"1 : <angles> The new world angle to rotate to",
					"2 : <time> The time to rotate in seconds"];
tmpDef.optArgs = [	"1 : <acceleration time> The time spent accelerating in seconds",
					"2 : <deceleration time> The time spent decelerating in seconds"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "rotateVelocity";
tmpDef.decl = "rotateVelocity(<rotate velocity>, <time>, <acceleration time>, <deceleration time>)";
tmpDef.desc = "Rotate this entity at a particular velocity for a given time";
tmpDef.callon = "script_model, script_origin or script_brushmodel";
tmpDef.example = "self RotateVelocity((x,y,z), 12);";
tmpDef.reqArgs = [	"1 : <rotate velocity> The rotational velocity to rotate",
					"2 : <time> The time to rotate in seconds"];
tmpDef.optArgs = [	"1 : <acceleration time> The time spent accelerating in seconds",
					"2 : <deceleration time> The time spent decelerating in seconds"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "rotateYaw";
tmpDef.decl = "rotateYaw(<yaw angle>, <time>, <acceleration time>, <deceleration time>)";
tmpDef.desc = "Rotate this entity to the given yaw";
tmpDef.callon = "script_model, script_origin or script_brushmodel";
tmpDef.reqArgs = [	"1 : <yaw angle> The new yaw angle in degrees",
					"2 : <time> The time to rotate in seconds"];
tmpDef.optArgs = [	"1 : <acceleration time> The time spent accelerating in seconds",
					"2 : <deceleration time> The time spent decelerating in seconds"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "secondaryOffhandButtonPressed";
tmpDef.decl = "secondaryOffhandButtonPressed()";
tmpDef.callon = "The player";
tmpDef.example = "if (self SecondaryOffhandButtonPressed()) ...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setActionSlot";
tmpDef.decl = "setActionSlot(<slot #>, <option name>, <extra parameter>)";
tmpDef.desc = "Sets the option to perform when the player executes (for example) \"+actionslot 1\".";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetActionSlot(1, \"altmode\");  //switch between attached m203 grenade launcher, if available";
tmpDef.reqArgs = [	"1 : <slot #>: 1 through 4, corresponding to bindings \"+actionslot 1\" through \"+actionslot 4",
					"2 : <option name>: valid choices are \"weapon\", \"nightVision\", \"altMode\", and \"\" (blank)."];
tmpDef.optArgs = [	"1 : <extra parameter>: Used by the \"weapon\" option, the name of the weapon to switch to."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setAutoPickup";
tmpDef.decl = "setAutoPickup(<auto pickup>)";
tmpDef.desc = "Sets whether the player will automatically pick up pickups.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetAutoPickup(true);";
tmpDef.reqArgs = [	"1 : <auto pickup>: (boolean) true if the player will automatically pickup pickups."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setChannelVolumes";
tmpDef.decl = "setChannelVolumes(<priority>, <shock name>, <fade time>)";
tmpDef.desc = "Set the channel volumes for the player (a way of fading volumes by type)";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetChannelVolumes(\"snd_channelvolprio_pain\", \"pain\", 1, .7, 3);";
// tslint:disable-next-line:max-line-length
tmpDef.reqArgs = [	"1 : <priority>: Valid priorities are \"snd_channelvolprio_holdbreath\", \"snd_channelvolprio_pain\", or \"snd_channelvolprio_shellshock\".",
					"2 : <shock name>: string describing the name of the .shock file w/ the channel volumes values to use."];
tmpDef.optArgs = [	"1 : <fade time>: in seconds."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setClientDvar";
tmpDef.decl = "setClientDvar(<dvarName>, <value>)";
tmpDef.desc = "Set the values of dvars which are specific to each client.";
tmpDef.callon = "The player";
tmpDef.example = "self SetClientDvar(\"cg_drawhud\", \"0\");";
tmpDef.reqArgs = [	"1 : <dvarName>: The name of a dvar.  Valid dvar names: \"cg_drawhud\".",
					"2 : <value>: The the value to which the dvar will be set"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setClientDvars";
tmpDef.decl = "setClientDvars(<dvarName>, <value>, <dvarName>, <value>, etc.)";
tmpDef.desc = "Set the values of a list of dvars which are specific to each client.";
tmpDef.callon = "The player";
tmpDef.example = "self SetClientDvars(\"cg_drawhud\", \"0\", \"cg_draw2d\", \"0\");";
tmpDef.reqArgs = [	"1 : <dvarName>: The name of a dvar.  Valid dvar names: \"cg_drawhud\".",
					"2 : <value>: The the value to which the dvar will be set"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setDepthOfField";
tmpDef.decl = "setDepthOfField(<near start>, <near end>, <far start>, <far end>, <near blur>, <far blur>)";
tmpDef.desc = "Set the depth of field values for a player.  If start >= end for near or far, depth of field is disabled for that region.";
tmpDef.callon = "<player>";
tmpDef.example = "self SetDepthOfField(10, 80, 1000, 7000, 5, 1.5);";
tmpDef.reqArgs = [	"1 : <near start> Before this distance, near depth of field is maximally blurry",
					"2 : <near end> After this distance, near depth of field is perfectly in focus",
					"3 : <far start> Before this distance, far depth of field is perfectly in focus",
					"4 : <far end> After this distance, far depth of field is maximally blurry",
					"5 : <near blur> Maximal blur radius for near depth of field, in pixels at 640x480",
					"6 : <far blur> Maximal blur radius for far depth of field, in pixels at 640x480"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setEQ";
tmpDef.decl = "setEQ(<channel>, <eqIndex>, <band>, <filter type>, <gain>, <frequency>, <q>)";
tmpDef.desc = "Set a parametric filter for the player on a specified channel";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetEQ(\"ambient\", 0, \"bell\", 3, 1000, 2.1);";
tmpDef.reqArgs = [	"1 : <channel>: the name of the audio channel to apply the eq to.",
					"2 : <eqIndex> : the eq index to use (0 and 1).",
					"3 : <band>: select which band, there are currently two bands (0 and 1).",
					"4 : <filter type>: the type of filter to apply (\"lowpass\", \"highpass\", \"lowshelf\", \"highshelf\", \"bell\").",
					"5 : <gain>: the gain in dB.  Has no effect on \"lowpass\" or \"highpass",
					"6 : <frequency>: the \"important\" frequency, between 0 and 20 kHZ.  enter value in Hz.",
					"7 : <q>: the quality factor."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setEQLerp";
tmpDef.decl = "setEQLerp(<eqLerp> <eqIndex>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Set the blend amount for the specified eqIndex, for eqIndex 0 if none is specified.  Automatically sets the blend amount of the other eqIndex to 1-eqLerp.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetEQLerp(0.25, 1);  // now using 25% of eq 1 and 75% of eq 0.";
tmpDef.reqArgs = [	"1 : <eqLerp>: float value from 0 to 1, percentage of specified eqIndex, 0 if none specified.",
					"2 : <eqIndex> : the eq index to use (0 and 1)."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setMoveSpeedScale";
tmpDef.decl = "setMoveSpeedScale(<scale>)";
tmpDef.desc = "Scales player movement speed by this amount ";
tmpDef.callon = "A Player Entity";
tmpDef.example = "self SetMoveSpeedScale(1.5);";
tmpDef.reqArgs = [	"1 : <scale> The amount to scale player movement"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setOffhandSecondaryClass";
tmpDef.decl = "setOffhandSecondaryClass(<name>)";
tmpDef.desc = "Set whether player can use smoke grenades or flashbangs.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetOffhandSecondaryClass(\"flash\");";
tmpDef.reqArgs = [	"1 : <name> Either \"smoke\" or \"flash\""];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setOrigin";
tmpDef.decl = "setOrigin(<player origin>)";
tmpDef.desc = "Set the player's origin";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetOrigin(pltruck.origin);";
tmpDef.reqArgs = [	"1 : <player origin> The player's origin (a point)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setPerk";
tmpDef.decl = "setPerk(<perk name>)";
tmpDef.desc = "give the specified perk";
tmpDef.callon = "A player";
tmpDef.example = "player SetPerk(\"specialty_gpsjammer\");";
tmpDef.reqArgs = [	"1 : <perk name> the perk to give"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setPhysicsGravityDir";
tmpDef.decl = "setPhysicsGravityDir(<direction>)";
tmpDef.desc = "Sets the direction of gravity for physics.";
tmpDef.example = "SetPhysicsGravityDir((0,0,1));";
tmpDef.reqArgs = [	"1 : <direction> The direction that gravity will pull (i.e., \"down\").  Set to (0,0,-1) for normal gravity behavior."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setPlayerAngles";
tmpDef.decl = "setPlayerAngles(<player angles>)";
tmpDef.desc = "Set the player's angles";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetPlayerAngles((0, 240, 0));";
tmpDef.reqArgs = [	"1 : <player angles> The player's angles in degrees."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setReverb";
tmpDef.decl = "setReverb(<priority>, <room type>, <dry level>, <wet level>, <fade time>)";
tmpDef.desc = "Set the sound reverberation for the player";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetReverb(\"snd_enveffectsprio_level\", \"stoneroom\", 1, .7, 3);";
tmpDef.reqArgs = [	"1 : <priority>: Valid priorities are \"snd_enveffectsprio_level\", or \"snd_enveffectsprio_shellshock\".",
					"2 : <room type>: string describing the type of reverb."];
tmpDef.optArgs = [	"1 : <dry level>: a float from 0 (no source sound) to 1 (full source sound)",
					"2 : <wet level>: a float from 0 (no effect) to 1 (full effect)",
					"3 : <fade time>: in seconds and modifies drylevel and wetlevel."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setSpreadOverride";
tmpDef.decl = "setSpreadOverride(<player spread>)";
tmpDef.desc = "Sets the player fixed spread value";
tmpDef.callon = "A player";
tmpDef.example = "level.player SetSpreadOverride(30);";
// tslint:disable-next-line:max-line-length
tmpDef.reqArgs = [	"1 : <player spread>: An integer. It will override all the spread values (min, max, stand, crouch, prone) no matter which weapon is in use."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setStance";
tmpDef.decl = "setStance()";
tmpDef.desc = "Sets the stance of the player. It only works for the player. Possible values are 'crouch', 'prone' and 'stand'";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetStance(\"stand\");";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setVelocity";
tmpDef.decl = "setVelocity(<player origin>)";
tmpDef.desc = "Set the player's velocity";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetVelocity(-400, 0, 100);";
tmpDef.reqArgs = [	"1 : <player velocity> The player's velocity (a vector)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setViewModel";
tmpDef.decl = "setViewModel(<viewmodel name>)";
tmpDef.desc = "Set the player's current view model.";
tmpDef.callon = "The player";
tmpDef.example = "self SetViewModel(\"viewmodel_hands_russian_vetrn\");";
tmpDef.reqArgs = [	"1 : <viewmodel name>: A viewmodel (string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setViewModelDepthOfField";
tmpDef.decl = "setViewModelDepthOfField(<start>, <end>)";
tmpDef.desc = "Set the depth of field values for the player's viewmodel when at hip.  If start >= end, depth of field is disabled.";
tmpDef.callon = "<player>";
tmpDef.example = "self SetViewModelDepthOfField(2, 10);";
tmpDef.reqArgs = [	"1 : <start> Before this distance, depth of field is maximally blurry",
					"2 : <end> After this distance, depth of field is perfectly in focus"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setWeaponAmmoClip";
tmpDef.decl = "setWeaponAmmoClip(<weapon name>, <ammunition>)";
tmpDef.desc = "Set the weapon clip ammunition for the given weapon.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetWeaponAmmoClip(\"m16\", 30);";
tmpDef.reqArgs = [	"1 : <weapon name>: (string) The weapon name for this weapon.",
					"2 : <ammunition>: (integer) The amount of ammunition in the clip."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setWeaponAmmoStock";
tmpDef.decl = "setWeaponAmmoStock(<weapon name>, <ammunition>)";
tmpDef.desc = "Set the ammunition stockpile for the given weapon.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetWeaponAmmoStock(\"m16\", 300);";
tmpDef.reqArgs = [	"1 : <weapon name>: (string) The weapon name for this weapon.",
					"2 : <ammunition>: (integer) The amount of ammunition in the stockpile."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setWeaponClipAmmo";
tmpDef.decl = "setWeaponClipAmmo(<weapon name>, <ammunition>)";
tmpDef.desc = "Set the weapon clip ammunition for the given weapon.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetWeaponClipAmmo(true);";
tmpDef.reqArgs = [	"1 : <weapon name>: (string) The weapon name for this weapon.",
					"2 : <ammunition>: (integer) The amount of ammunition in the clip."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setWeaponSlotAmmo";
tmpDef.decl = "setWeaponSlotAmmo(<weapon slot>, <ammo count>)";
tmpDef.desc = "Sets the ammunition for the weapon in the given weapon slot.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetWeaponSlotAmmo(\"primary\", 125);";
tmpDef.reqArgs = [	"1 : <weapon slot>: Valid weaponslots are \"primary\" and \"primaryb\".",
					"2 : <ammo count>: The amount of ammunition."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setWeaponSlotClipAmmo";
tmpDef.decl = "setWeaponSlotClipAmmo(<weapon slot>, <ammo count>)";
tmpDef.desc = "Sets the clip ammunition for the weapon in the given weapon slot.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetWeaponSlotClipAmmo(\"primary\", 125);";
tmpDef.reqArgs = [	"1 : <weapon slot>: Valid weaponslots are \"primary\" and \"primaryb\".",
					"2 : <ammo count>: The amount of ammunition."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "setWeaponSlotWeapon";
tmpDef.decl = "setWeaponSlotWeapon(<weapon slot>)";
tmpDef.desc = "Sets the the weapon in the given weapon slot.";
tmpDef.callon = "The player";
tmpDef.example = "level.player SetWeaponSlotWeapon(\"primary\", weapon);";
tmpDef.reqArgs = [	"1 : <weapon slot>: Valid weaponslots are \"primary\" and \"primaryb\".",
					"2 : <weapon name>: The name of the weapon to use in this slot."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "shellShock";
tmpDef.decl = "shellShock(<shellshockname>, <duration>, overrideCheat)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Start a shell shock sequence for the player. The shell shock must be precached, otherwise calling this script will cause a script error.";
tmpDef.callon = "<player>";
tmpDef.example = "self ShellShock(\"death\", 5);";
tmpDef.reqArgs = [	"1 : <shellshockname>",
					"2 : <duration> duration in seconds. The duration must be between 0 and 60 seconds. "];
tmpDef.optArgs = [	"1 : <overrideCheat> Certain player cheats can disable this function, set this true to force the issue."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "showViewModel";
tmpDef.decl = "showViewModel()";
tmpDef.desc = "Show the player's current view model.";
tmpDef.callon = "The player";
tmpDef.example = "level.player ShowViewModel();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "solid";
tmpDef.decl = "solid()";
tmpDef.desc = "Set the solid flag, so that this object is collidable.";
tmpDef.callon = "script_brushmodel";
tmpDef.example = "self Solid();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "stopLocalSound";
tmpDef.decl = "stopLocalSound(<sound name>)";
tmpDef.desc = "Stops all instances of a local soundalias running on a player.";
tmpDef.callon = "The player";
tmpDef.example = "level.player StopLocalSound(\"annoying_siren\");";
tmpDef.reqArgs = [	"1 : <sound name>: The name of the sound to stop."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "stopShellShock";
tmpDef.decl = "stopShellShock()";
tmpDef.desc = "Stop a shell shock sequence for the player";
tmpDef.callon = "<player>";
tmpDef.example = "self StopShellShock();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "switchToOffhand";
tmpDef.decl = "switchToOffhand(<weapon name>)";
tmpDef.desc = "Switch the player's offhand weapon";
tmpDef.callon = "The player";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name (a string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "switchToWeapon";
tmpDef.decl = "switchToWeapon(<weapon name>)";
tmpDef.desc = "Switch to a different weapon";
tmpDef.callon = "The player";
tmpDef.example = "level.player SwitchToWeapon(\"mosin_nagant\");";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name (a string)"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "takeAllWeapons";
tmpDef.decl = "takeAllWeapons()";
tmpDef.desc = "Remove all the weapons from the player.";
tmpDef.callon = "The player";
tmpDef.example = "level.player TakeAllWeapons();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "takeWeapon";
tmpDef.decl = "takeWeapon(<weapon name>)";
tmpDef.desc = "Take a weapon from the player.";
tmpDef.callon = "The player";
tmpDef.example = "level.player TakeWeapon(\"m16_grenadier\");";
tmpDef.reqArgs = [	"1 : <weapon name> The weapon name to take from the player"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_ClearReticleLockOn";
tmpDef.decl = "target_ClearReticleLockOn()";
tmpDef.desc = "Cancels any lock-on sequence on the hud.";
tmpDef.example = "Target_ClearReticleLockOn();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_GetArray";
tmpDef.decl = "target_GetArray()";
tmpDef.desc = "Gets an array of entities that are set as targets";
tmpDef.example = "mytargets = Target_GetArray();";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_IsInCircle";
tmpDef.decl = "target_IsInCircle(<target entity>, <player>, <fov>, <radius>)";
tmpDef.desc = "Returns whether a target is within a given radius from the center of the player's screen";
tmpDef.example = "level.player Target_IsInCircle(enemy_chopper, level.player, 65, 100);";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target",
					"2 : <player> The player entity",
					"3 : <fov> The player's field of view",
					"4 : <radius> radius of the circle, centered at the center of the screen"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_IsInRect";
tmpDef.decl = "target_IsInRect(<target entity>, <player>, <fov>, <halfwidth>, <halfheight>)";
tmpDef.desc = "Returns whether a target is within a given rectangle, centered in the center of the player's screen";
tmpDef.example = "level.player Target_IsInRect(enemy_chopper, level.player, 65, 100, 100);";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target",
					"2 : <player> The player entity",
					"3 : <fov> The player's field of view",
					"4 : <halfwidth> half the width of the rectangle",
					"5 : <halfheight> half the height of the rectangle"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_IsTarget";
tmpDef.decl = "target_IsTarget(<entity>)";
tmpDef.desc = "Returns whether an entity has been marked as a target";
tmpDef.example = "if (Target_IsTarget(foundEnt)) ...";
tmpDef.reqArgs = [	"1 : <entity> The entity to check"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_Remove";
tmpDef.decl = "target_Remove(<target entity>)";
tmpDef.desc = "Removes a target";
tmpDef.example = "Target_Remove(enemy_chopper);";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_Set";
tmpDef.decl = "target_Set(<target entity>, <target offset>)";
tmpDef.desc = "Adds a new target to draw on the hud";
tmpDef.example = "Target_Set(enemy_chopper);";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target"];
tmpDef.optArgs = [	"1 : <target offset> The offset of the target position from the entity's origin"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_SetAttackMode";
tmpDef.decl = "target_SetAttackMode(<target entity>, <mode name>)";
tmpDef.desc = "Sets how missiles and rockets should approach the target.";
tmpDef.example = "Target_SetAttackMode(enemy_tank, \"top\");";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target",
					"2 : <mode name> \"top\" or \"direct\""];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_SetJavelinOnly";
tmpDef.decl = "target_SetJavelinOnly(<target entity>, <true/false>)";
tmpDef.desc = "Target will only draw on player's hud when they are looking through the Javelin-weapon's site.";
tmpDef.example = "Target_SetJavelinOnly(enemy_tank, true);";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target",
					"2 : <mode name> \"top\" or \"direct\""];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_SetOffscreenShader";
tmpDef.decl = "target_SetOffscreenShader(<target entity>, <materialname>)";
// tslint:disable-next-line:max-line-length
tmpDef.desc = "Sets the material that is used when a target clamps to the edge of the screen.  The target must have already been created with target_set()";
tmpDef.example = "Target_SetOffscreenShader(enemy_chopper, \"arrow\");";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target",
					"2 : <materialname> The shader for the quad drawn over the target"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_SetShader";
tmpDef.decl = "target_SetShader(<target entity>, <materialname>)";
tmpDef.desc = "Changes the material of a target.  The target must have already been created with target_set()";
tmpDef.example = "Target_SetShader(enemy_chopper, \"locked_on_shader\");";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target",
					"2 : <materialname> The shader for the quad drawn over the target"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "target_StartReticleLockOn";
tmpDef.decl = "target_StartReticleLockOn(<target entity>, <duration>)";
tmpDef.desc = "Begins the lock-on sequence for the target on the hud.  This affects the animation of the vehicle reticle.";
tmpDef.example = "Target_StartReticleLockOn(enemy_chopper, 4);";
tmpDef.reqArgs = [	"1 : <target entity> The entity that is the target",
					"2 : <duration> The amount of time between now and fully locked-on, in seconds."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "unSetPerk";
tmpDef.decl = "unSetPerk(<perk name>)";
tmpDef.desc = "takes the specified perk from the player";
tmpDef.callon = "A player";
tmpDef.example = "player UnSetPerk(\"specialty_gpsjammer\");";
tmpDef.reqArgs = [	"1 : <perk name> the perk to unset"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "uploadScore";
tmpDef.decl = "uploadScore(<mission>, <score>)";
tmpDef.desc = "Upload arcade mode score to XBLIVE leaderboards";
tmpDef.callon = "A Player";
tmpDef.example = "level.player UploadScore(0, 100);";
tmpDef.reqArgs = [	"1 : <mission>: mission index.",
					"2 : <score>: score for that mission."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "uploadTime";
tmpDef.decl = "uploadTime(<mission>, <time>)";
tmpDef.desc = "Upload a time to XBLIVE leaderboards";
tmpDef.callon = "A Player";
tmpDef.example = "level.player UploadTime(19, 15.2);";
tmpDef.reqArgs = [	"1 : <mission>: mission index.",
					"2 : <time>: time for this mission."];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "useButtonPressed";
tmpDef.decl = "useButtonPressed()";
tmpDef.callon = "The player";
tmpDef.example = "if (self UseButtonPressed()) ...";
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "vibrate";
tmpDef.decl = "vibrate(<direction vector>, <amplitude>, <period>, <time>)";
tmpDef.desc = "Causes a script entity to vibrate, rotating around its origin, along a given vector dir";
tmpDef.example = "self Vibrate(directionVir, 0.3, 0.4, 1.0);";
tmpDef.reqArgs = [	"1 : <direction vector> The direction of the vibration",
					"2 : <amplitude> The amount of the vibration in degrees",
					"3 : <period> The period of the vibration in seconds",
					"4 : <time> The length of time of the vibration in seconds"];
defs.push(tmpDef);

tmpDef = new DefFunction;
tmpDef.name = "viewKick";
tmpDef.decl = "viewKick(<force>, <source>)";
tmpDef.desc = "Damage the player, and throw the screen around";
tmpDef.callon = "<player>";
tmpDef.example = "level.player ViewKick(127, level.player.origin);";
tmpDef.reqArgs = [	"1 : <force> The force of the kick, from 0 to 127",
					"2 : <source> (a point) the source of the kick"];
defs.push(tmpDef);

