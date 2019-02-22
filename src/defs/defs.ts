/* tslint:disable:max-line-length */

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

let funcDef: DefFunction;

funcDef = new DefFunction;
funcDef.name = `aCos`;
funcDef.decl = `aCos(<cos value>)`;
funcDef.desc = `Returns an angle corresponding to a particular cosine value.`;
funcDef.example = `upAngle = aCos(distanceRatio);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `aSin`;
funcDef.decl = `aSin(<sin value>)`;
funcDef.desc = `Returns an angle corresponding to a particular sine value.`;
funcDef.example = `upAngle = aSin(upAmount);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `aTan`;
funcDef.decl = `aTan(<tan value>)`;
funcDef.desc = `Returns an angle corresponding to a particular tangential value.`;
funcDef.example = `upAngle = aTan(height / distance);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `addAIEventListener`;
funcDef.decl = `<entity> addAIEventListener(<event>)`;
funcDef.desc = `Registers an entity to listen to an AI event. Call waittill(<event>) to get the actual notification.`;
funcDef.example = `self addAIEventListener("bulletwhizby");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `addTestClient`;
funcDef.decl = `addTestClient()`;
funcDef.desc = `Adds a test client to the map and returns a reference to that client.`;
funcDef.example = `ent[i] = addTestClient();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `addVehicleToCompass`;
funcDef.decl = `<entity> addVehicleToCompass(<compassIconType>)`;
funcDef.desc = `Add this vehicle to the compass.`;
funcDef.example = `tank addVehicleToCompass("tank");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `adsButtonPressed`;
funcDef.decl = `<player> adsButtonPressed()`;
funcDef.desc = `Check if the player is pressing the "ADS" button.`;
funcDef.example = `while (self adsButtonPressed()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `aimAtPos`;
funcDef.decl = `<actor> aimAtPos(<aim at point>)`;
funcDef.desc = `Sets the actor to aim at the given point. Returns the blend time of the aim.`;
funcDef.example = `aimTime = self aimAtPos(targetPoint);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allClientsPrint`;
funcDef.decl = `allClientsPrint(<string>)`;
funcDef.desc = `Cause all clients to print the localized version of this string.`;
funcDef.example = `allClientsPrint("Game Complete");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowAds`;
funcDef.decl = `<player> allowAds(<allow>)`;
funcDef.desc = `Sets whether the player can switch to ADS.`;
funcDef.example = `level.player allowAds(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowCrouch`;
funcDef.decl = `<player> allowCrouch(<allow>)`;
funcDef.desc = `Sets whether the player can crouch.`;
funcDef.example = `level.player allowCrouch(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowJump`;
funcDef.decl = `<player> allowJump(<allow>)`;
funcDef.desc = `Sets whether the player can jump.`;
funcDef.example = `level.player allowJump(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowLean`;
funcDef.decl = `<player> allowLean(<allow>)`;
funcDef.desc = `Sets whether the player can lean.`;
funcDef.example = `level.player allowLean(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowMelee`;
funcDef.decl = `<player> allowMelee(<allow>)`;
funcDef.desc = `Sets whether the player can melee.`;
funcDef.example = `level.player allowMelee(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowProne`;
funcDef.decl = `<player> allowProne(<allow>)`;
funcDef.desc = `Sets whether the player can go prone.`;
funcDef.example = `level.player allowProne(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowSpectateTeam`;
funcDef.decl = `<player> allowSpectateTeam(<team>, <spectate>)`;
funcDef.desc = `Set whether the player can spectate the given team.`;
funcDef.example = `self allowSpectateTeam("axis", true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowSprint`;
funcDef.decl = `<player> allowSprint(<allow>)`;
funcDef.desc = `Sets whether the player can sprint.`;
funcDef.example = `level.player allowSprint(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowStand`;
funcDef.decl = `<player> allowStand(<allow>)`;
funcDef.desc = `Sets whether the player can stand up.`;
funcDef.example = `level.player allowStand(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `allowedStances`;
funcDef.decl = `<actor> allowedStances(<stance> ...);`;
funcDef.desc = `Sets the list of the actor's allowed stances.`;
funcDef.example = `self allowedStances("crouch", "prone");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `ambientPlay`;
funcDef.decl = `ambientPlay(<ambient>, <fadetime>)`;
funcDef.desc = `Play the given piece of ambient sound.`;
funcDef.example = `ambientPlay("redsquare_dark");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `ambientStop`;
funcDef.decl = `ambientStop(<fadetime>)`;
funcDef.desc = `Stops all ambient sounds (excluding the music track).`;
funcDef.example = `ambientStop(2);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `amplify`;
funcDef.decl = `amplify(<origin>, <min_range>, <max_range>, <min_volume>, <max_volume>, <falloff>)`;
funcDef.desc = `Amplifies the sound around the origin.`;
funcDef.example = `amplify(org, 5, 50, 0, 1, 1.2);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `amplifyStop`;
funcDef.decl = `amplifyStop()`;
funcDef.desc = `Disables amplification if active (see amplify).`;
funcDef.example = `amplifyStop();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `anglesToForward`;
funcDef.decl = `anglesToForward(<angles>)`;
funcDef.desc = `Returns the forward vector corresponding to a set of angles.`;
funcDef.example = `forward = anglesToForward(angles);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `anglesToRight`;
funcDef.decl = `anglesToRight(<angles>)`;
funcDef.desc = `Returns the right vector corresponding to a set of angles.`;
funcDef.example = `right = anglesToRight(angles);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `anglesToUp`;
funcDef.decl = `anglesToUp(<angles>)`;
funcDef.desc = `Returns the up vector corresponding to a set of angles.`;
funcDef.example = `up = anglesToUp(angles);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `animCustom`;
funcDef.decl = `<actor> animCustom(<animscript>)`;
funcDef.desc = `Sets the anim script for this actor.`;
funcDef.example = `self animCustom(animscripts\\scripted\\stalingrad_cover_crouch::main);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `animHasNotetrack`;
funcDef.decl = `animHasNotetrack(<animation>, <note track>)`;
funcDef.desc = `Queries the given animation for a note track.`;
funcDef.example = `if (isDefined(facialanim) && animHasNotetrack(facialanim, "dialogue"))`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `animMode`;
funcDef.decl = `<entity> animMode(<mode>)`;
funcDef.desc = `Set the way that animation deltas are interpreted by the game engine.<br><br><b>Note:</b><br>&lt;mode&gt; arguments-<br>&emsp;gravity: &emsp;&emsp;&emsp; The animation's angle and position deltas will be used, and gravity will pull the entity down.<br>&emsp;nogravity:&emsp;&emsp; The animation's angle and position deltas will be used, gravity is ignored.<br>&emsp;angle_deltas: &ensp;The animation's angle deltas will be used. The position will be fixed. Gravity is effective.<br>&emsp;zonly_physics: Just like "gravity" mode, but only the Z (up and down) of the entity's position will change.<br>&emsp;none: &emsp;&emsp;&emsp;&emsp; Use default animmode behavior (i.e., code controls the movement).`;
funcDef.example = `self animMode("gravity");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `animRelative`;
funcDef.decl = `<entity> animRelative(<notify>, <origin>, <angles>, <animation>, <mode>, <root>)`;
funcDef.desc = `Runs an animscript on an entity.`;
funcDef.example = `driver animRelative("germantruck_driver_closedoor", org , angles, driver.closedooranim);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `animScripted`;
funcDef.decl = `<entity> animScripted(<notify>, <origin>, <angles>, <animation>, <mode>, <root>)`;
funcDef.desc = `Runs an animscript on an entity.`;
funcDef.example = `driver animScripted("germantruck_driver_closedoor", org , angles, driver.closedooranim);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `announcement`;
funcDef.decl = `announcement(<string>)`;
funcDef.desc = `Sends an announcement to all clients.`;
funcDef.example = `This function has no official examples.`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `anyAmmoForWeaponModes`;
funcDef.decl = `<player> anyAmmoForWeaponModes(<weapon>)`;
funcDef.desc = `Returns true if the player has any ammo available for the weapon or any of its alt-modes (grenade launcher, etc).`;
funcDef.example = `if (level.player anyAmmoForWeaponModes("m4_grenadier")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `assert`;
funcDef.decl = `assert(<value>)`;
funcDef.desc = `Assert that the given statement is correct. The function will throw a script error if this is false.`;
funcDef.example = `assert(enemyInSight == true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `assertEx`;
funcDef.decl = `assertEx(<value>, <message>)`;
funcDef.desc = `Assert that the given statement is correct. The function will throw a script error if this is false, with the given message.`;
funcDef.example = `assertEx(enemyInSight == true, "Script expected enemy to be in sight.");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `assertMsg`;
funcDef.decl = `assertMsg(<message>)`;
funcDef.desc = `Throws a script error with the given message.`;
funcDef.example = `assertMsg("Unhandled enemy type.");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `attach`;
funcDef.decl = `<entity> attach(<modelname>, <tagname>, <ignoreCollision>)`;
funcDef.desc = `Attach a model to an entity.`;
funcDef.example = `self attach("panzerflak_ammo", "tag_weapon_left");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `attachPath`;
funcDef.decl = `<entity> attachPath(<node>)`;
funcDef.desc = `Attaches this vehicle to the given path.`;
funcDef.example = `bomber attachPath(aBomberPaths[i]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `attackButtonPressed`;
funcDef.decl = `<player> attackButtonPressed()`;
funcDef.desc = `Check if the player is pressing the "attack" button.`;
funcDef.example = `if (self attackButtonPressed()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `badPlace_Arc`;
funcDef.decl = `badPlace_Arc(<name>, <duration>, <origin>, <radius>, <height>, <direction>, <right angle>, <left angle>, <team>)`;
funcDef.desc = `Creates a bad place arc. AI will flee this position if they can, and will not go into it if they can avoid it.`;
funcDef.example = `badPlace_Arc("halftrack_bp", -1, mg42.origin, 1500, 400, (1.00, 0.00, 0.00), 20, 0, "allies");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `badPlace_Brush`;
funcDef.decl = `badPlace_Brush(<name>, <duration>, <brush entity>, <team>)`;
funcDef.desc = `Creates a bad place from a brush entity. AI will flee this position if they can, and will not go into it if they can avoid it.`;
funcDef.example = `badPlace_Brush("moody", -1, volumeEnt, "axis");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `badPlace_Cylinder`;
funcDef.decl = `badPlace_Cylinder(<name>, <duration>, <origin>, <radius>, <height>, <team>, <team>)`;
funcDef.desc = `Creates a bad place cylinder. AI will flee this position if they can, and will not go into it if they can avoid it.`;
funcDef.example = `badPlace_Cylinder("moody", -1, level.moodyfall_origin, 75, 300, "neutral");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `badPlace_Delete`;
funcDef.decl = `badPlace_Delete(<bad place identifier>)`;
funcDef.desc = `Deletes a bad place. It is okay to delete a bad place name that doesn't exist. It is not okay to delete the special name "".`;
funcDef.example = `badPlace_Delete("bpFlak1");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `ban`;
funcDef.decl = `ban(<clientnum>)`;
funcDef.desc = `Bans the specified player.`;
funcDef.example = `ban(player getEntityNumber());`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `beginLocationSelection`;
funcDef.decl = `<player> beginLocationSelection(<location selector>, <selector size>)`;
funcDef.desc = `Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting. Works with endLocationSelection(). When the user confirms or cancels, they will recieve a notify "confirm_location" or "cancel_location". The former notify contains the location they selected, as a vector.`;
funcDef.example = `self beginLocationSelection("map_crosshair", 0.1); self waittill("confirm_location", loc);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `beginPrediction`;
funcDef.decl = `<actor> beginPrediction()`;
funcDef.desc = `Begin actor physics prediction.`;
funcDef.example = `self beginPrediction();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `bulletSpread`;
funcDef.decl = `bulletSpread(<start>, <end>, <spread>)`;
funcDef.desc = `Uses spread to return a new end position.`;
funcDef.example = `endPos = bulletSpread(self.origin, target.origin, 1.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `bulletTrace`;
funcDef.decl = `bulletTrace(<start>, <end>, <hit characters>, <ignore entity>)`;
funcDef.desc = `Allows script to do a point trace with MASK_SHOT. Returns hit position, hit entity, hit surface normal.`;
funcDef.example = `trace = bulletTrace(magicBulletOrigin.origin, eyePos, true, undefined);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `bulletTracePassed`;
funcDef.decl = `bulletTracePassed(<start>, <end>, <hit characters>, <ignore entity>)`;
funcDef.desc = `Allows script to do a point trace with MASK_SHOT. Returns true if trace complete, else returns false.`;
funcDef.example = `success = bulletTracePassed(magicBulletOrigin.origin, eyePos, true, undefined);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `bulletTracer`;
funcDef.decl = `bulletTracer(<start>, <end>, <forceDraw>)`;
funcDef.desc = `Creates a bullet tracer from the start to end point.`;
funcDef.example = `bulletTracer(self.origin, target.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `buttonPressed`;
funcDef.decl = `<player> buttonPressed(<button>)`;
funcDef.desc = `Check if the <b><i>host</i></b> is pressing the button/key, "BUTTON_A", "BUTTON_B", ...`;
funcDef.example = `if (self buttonPressed("BUTTON_A")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `canAttackEnemyNode`;
funcDef.decl = `<actor> canAttackEnemyNode()`;
funcDef.desc = `Checks if this actor can attack its enemies node.`;
funcDef.example = `self canAttackEnemyNode();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `canSee`;
funcDef.decl = `<actor> canSee(<target>)`;
funcDef.desc = `Check to see if the actor can see the given entity.`;
funcDef.example = `if (self canSee(player))`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `canShoot`;
funcDef.decl = `<actor> canShoot(<shoot at position>, <offset from gun>)`;
funcDef.desc = `Check to see if the actor can shoot the given position.`;
funcDef.example = `canShoot = self canShoot(eye, offset);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `canSpawnTurret`;
funcDef.decl = `canSpawnTurret()`;
funcDef.desc = `Returns whether a new turret can be spawned.`;
funcDef.example = `if (canSpawnTurret()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `canUseTurret`;
funcDef.decl = `<actor> canUseTurret(<turret>)`;
funcDef.desc = `Check whether this actor can use this turret.`;
funcDef.example = `self canUseTurret(turret);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `changeFontScaleOverTime`;
funcDef.decl = `<hud> changeFontScaleOverTime(<time>)`;
funcDef.desc = `Set a HUD element to transition in fontScale over time. Normally setting the fontScale of an element causes an immediate visual change. However, if the fontScale gets set within <time> after calling changeFontScaleOverTime, then the HUD element will transition to the new fontScale over the remaining <time>.`;
funcDef.example = `level.introString1 changeFontScaleOverTime(1.2);
level.introString1.fontScale = 0.3; // This will transition the fontScale form whatever it was before to the new value of 0.3 over 1.2 seconds.`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `changeLevel`;
funcDef.decl = `changeLevel(<mapname>, <persistent>, <exitTime>)`;
funcDef.desc = `Changes to the new level.`;
funcDef.example = `changeLevel("burnville", false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `checkCoverExitPosWithPath`;
funcDef.decl = `<actor> checkCoverExitPosWithPath(<exit pos>)`;
funcDef.desc = `Check if an exit pos is valid with regard to the AI path.`;
funcDef.example = `soldier checkCoverExitPosWithPath(exitPos);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `checkGrenadeLaunch`;
funcDef.decl = `<actor> checkGrenadeLaunch(<barrel offset>)`;
funcDef.desc = `Checks whether the actor can launch a grenade at his target. If he can't then result will be undefined, otherwise the result is the resultant velocity vector.`;
funcDef.example = `throwVel = self checkGrenadeLaunch(offset);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `checkGrenadeLaunchPos`;
funcDef.decl = `<actor> checkGrenadeLaunchPos(<barrel offset>, <targetpos>)`;
funcDef.desc = `Checks whether the actor can launch a grenade at his target. If he can't then result will be undefined, otherwise the result is the resultant velocity vector.`;
funcDef.example = `throwVel = self checkGrenadeLaunchPos(offset, targetPos);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `checkGrenadeThrow`;
funcDef.decl = `<actor> checkGrenadeThrow( <hand offset>, <method>, <random range> )`;
funcDef.desc = `Checks whether the actor can throw a grenade at his target. If he can't then result will be undefined, otherwise the result is the resultant velocity vector.`;
funcDef.example = `throwVel = self checkGrenadeThrow(armOffset, "min energy", 0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `checkGrenadeThrowPos`;
funcDef.decl = `<actor> checkGrenadeThrowPos(<hand offset>, <method>, <targetpos>)`;
funcDef.desc = `Checks whether the actor can throw a grenade at a given position. If he can't then result will be undefined, otherwise the result is the resultant velocity vector.`;
funcDef.example = `throwVel = self checkGrenadeThrowPos(armOffset, "min energy", targetPos);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `checkProne`;
funcDef.decl = `<actor> checkProne(<position>, <yaw>, <is prone>)`;
funcDef.desc = `Returns true when a character can go prone at the specified position. Specifically setup for use by AI characters.`;
funcDef.example = `canFitProne = self checkProne(origin, yaw, alreadyProne);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `cinematic`;
funcDef.decl = `cinematic(<cinematic name>, <exitTime>)`;
funcDef.desc = `Play the given cinematic.`;
funcDef.example = `cinematic("cod_end");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `cinematicInGame`;
funcDef.decl = `cinematicInGame(<cinematic name>)`;
funcDef.desc = `Play the given cinematic without blocking the level.`;
funcDef.example = `cinematicInGame("cod_end");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `cinematicInGameLoop`;
funcDef.decl = `cinematicInGameLoop(<cinematic name>)`;
funcDef.desc = `Play the given cinematic in a loop, without blocking.`;
funcDef.example = `cinematicInGameLoop("cod_end");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `cinematicInGameLoopFromFastfile`;
funcDef.decl = `cinematicInGameLoopFromFastfile(<cinematic name>)`;
funcDef.desc = `Play the given cinematic, which is already loaded, in a loop, without blocking.`;
funcDef.example = `cinematicInGameLoopFromFastfile("cod_end");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `cinematicInGameLoopResident`;
funcDef.decl = `cinematicInGameLoopResident(<cinematic name>)`;
funcDef.desc = `Play the given cinematic in a loop, without blocking.`;
funcDef.example = `cinematicInGameLoopResident("cod_end");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `cinematicInGameSync`;
funcDef.decl = `cinematicInGameSync(<cinematic name>)`;
funcDef.desc = `Play the given cinematic, blocking until it starts.`;
funcDef.example = `cinematicInGameSync("cod_end");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearAllTextAfterHudElem`;
funcDef.decl = `<hud> clearAllTextAfterHudElem()`;
funcDef.desc = `Clear the config strings for the unique text set after this string. This is intended for development use only.`;
funcDef.example = `level.freeTextMarker clearAllTextAfterHudElem();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearAnim`;
funcDef.decl = `<entity> clearAnim(<animation>, <time>)`;
funcDef.desc = `Sets an animation's goal weight (and the goal weights of all of its descendents) to zero over the specified time.`;
funcDef.example = `self clearAnim(%root, 0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearEnemy`;
funcDef.decl = `<actor> clearEnemy()`;
funcDef.desc = `Clear the actor's current enemy entity.`;
funcDef.example = `self clearEnemy()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearEntityTarget`;
funcDef.decl = `<actor> clearEntityTarget()`;
funcDef.desc = `Clears an AI's entity target.`;
funcDef.example = `self clearEntityTarget()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearFixedNodeSafeVolume`;
funcDef.decl = `<actor> clearFixedNodeSafeVolume()`;
funcDef.desc = `Clears this actor's fixed node safe volume.`;
funcDef.example = `self clearFixedNodeSafeVolume()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearGoalVolume`;
funcDef.decl = `<actor> clearGoalVolume()`;
funcDef.desc = `Clears this actor's goal volume.`;
funcDef.example = `self clearGoalVolume()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearGoalYaw`;
funcDef.decl = `<entity> clearGoalYaw()`;
funcDef.desc = `Clear the goal yaw direction for this vehicle.`;
funcDef.example = `level.fak1 clearGoalYaw();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearLocalizedStrings`;
funcDef.decl = `clearLocalizedStrings(<firstString>)`;
funcDef.desc = `Clear all of the localized strings. This is useful if you are frequently changing HUD text for development.`;
funcDef.example = `clearLocalizedStrings();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearLookAtEnt`;
funcDef.decl = `<entity> clearLookAtEnt()`;
funcDef.desc = `Clear the entity the vehicle is orienting towards.`;
funcDef.example = `eTank clearLookAtEnt();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearPerks`;
funcDef.decl = `<player> clearPerks()`;
funcDef.desc = `Removes all perks for a player.`;
funcDef.example = `player clearPerks();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearPitchOrient`;
funcDef.decl = `<actor> clearPitchOrient()`;
funcDef.desc = `Clear pitch orientation.`;
funcDef.example = `self clearPitchOrient()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearPotentialThreat`;
funcDef.decl = `<entity> clearPotentialThreat()`;
funcDef.desc = `Clear the potential threat direction. See setPotentialThreat for more info on potential threats.`;
funcDef.example = `self clearPotentialThreat()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearTargetEnt`;
funcDef.decl = `<hud> clearTargetEnt()`;
funcDef.desc = `Clear this waypoint from targetting an entity.`;
funcDef.example = `waypoint clearTargetEnt();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearTargetEntity`;
funcDef.decl = `<entity> clearTargetEntity()`;
funcDef.desc = `Clears the current target for this turret.`;
funcDef.example = `roofMg42 clearTargetEntity();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearTargetYaw`;
funcDef.decl = `<entity> clearTargetYaw()`;
funcDef.desc = `Clear the target yaw direction for this vehicle.`;
funcDef.example = `level.fak1 clearTargetYaw();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clearTurretTarget`;
funcDef.decl = `<entity> clearTurretTarget()`;
funcDef.desc = `Clear the target for the vehicle turret.`;
funcDef.example = `eTank clearTurretTarget();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clientAnnouncement`;
funcDef.decl = `clientAnnouncement(<clientnum>, <string>)`;
funcDef.desc = `Sends an announcement to a single client.`;
funcDef.example = `This function has no official examples.`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clientClaimTriggers`;
funcDef.decl = `<entity> clientClaimTrigger(<trigger>)`;
funcDef.desc = `Claim a single user trigger.`;
funcDef.example = `other clientClaimTrigger(self);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clientPrint`;
funcDef.decl = `clientPrint(<client>, <string>)`;
funcDef.desc = `Print a localized version of this string for a given client.`;
funcDef.example = `This function has no official examples.`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clientReleaseTrigger`;
funcDef.decl = `<entity> clientReleaseTrigger(<trigger>)`;
funcDef.desc = `Release a single user trigger.`;
funcDef.example = `other clientReleaseTrigger(self);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `clonePlayer`;
funcDef.decl = `<player> clonePlayer(<death animation duration>)`;
funcDef.desc = `Clone the player's model for death animations.`;
funcDef.example = `body = self ClonePlayer(deathAnimDuration);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `closeFile`;
funcDef.decl = `closeFile(<file>)`;
funcDef.desc = `Close a script-controlled file. Returns 1 if successful and -1 if unsuccessful.`;
funcDef.example = `closeFile(file);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `closeInGameMenu`;
funcDef.decl = `<player> closeInGameMenu()`;
funcDef.desc = `Close the in game menu for this client.`;
funcDef.example = `player closeInGameMenu();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `closeMenu`;
funcDef.decl = `<player> closeMenu()`;
funcDef.desc = `Close the current player menu.`;
funcDef.example = `player closeMenu();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `closer`;
funcDef.decl = `closer(<reference>, <point A>, <point B>)`;
funcDef.desc = `Tests which of two points is the closest. Returns true if point A is closer to the reference than point B.`;
funcDef.example = `if (closer(center, models[j].origin, models[i].origin)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `combineAngles`;
funcDef.decl = `combineAngles(<angles A>, <angles B>)`;
funcDef.desc = `Returns angles B reoriented by angles A.`;
funcDef.example = `crateAnglesInWorld = combineAngles(boatAngles, crateAnglesInBoat);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `commitSave`;
funcDef.decl = `commitSave(<save ID>)`;
funcDef.desc = `Commits the current save in the save buffer.`;
funcDef.example = `commitSave(id);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `connectPaths`;
funcDef.decl = `<entity> connectPaths()`;
funcDef.desc = `Connects the paths that intersect with the entity. If the entity is a script_brushmodel then it must have DYNAMICPATH set to connect paths.`;
funcDef.example = `vehicle connectPaths()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `cos`;
funcDef.decl = `cos(<angle>)`;
funcDef.desc = `Returns the cosine of an angle.`;
funcDef.example = `frac = cos(degrees);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `createPrintChannel`;
funcDef.decl = `createPrintChannel(<channel name>)`;
funcDef.desc = `Open a print channel.`;
funcDef.example = `createPrintChannel("script_bler");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `createThreatBiasGroup`;
funcDef.decl = `createThreatBiasGroup(<name>)`;
funcDef.desc = `Create a new threat bias group. If it already exists, do nothing.`;
funcDef.example = `createThreatBiasGroup("flanking_team");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `damageConeTrace`;
funcDef.decl = `<entity> bulletTracePassed(<damage position>, <ignore entity>)`;
funcDef.desc = `Determines how much the entity can be damaged from the given position, using the same check that is used by grenades. Performs multiple damage traces and returns an approximation to how much of the entity is damageable from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially damageable.`;
funcDef.example = `damageAmount = player damageConeTrace(damager.origin, damager);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `deactivateChannelVolumes`;
funcDef.decl = `<player> deactivateChannelVolumes(<priority>, <fade time>)`;
funcDef.desc = `Deactivate the channel volumes for the player on the given priority level.`;
funcDef.example = `level.player deactivateChannelVolumes("snd_channelvolprio_holdbreath", 3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `deactivateEq`;
funcDef.decl = `<player> deactivateEq(<eqIndex>, <channel>, <band>)`;
funcDef.desc = `Deactivate the specified eq filter for the specified band.`;
funcDef.example = `level.player deactivateEq(0, "local", 0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `deactivateReverb`;
funcDef.decl = `<player> deactivateReverb(<priority>, <fade time>)`;
funcDef.desc = `Deactivate the sound reverberation for the player on the given priority level.`;
funcDef.example = `level.player deactivateReverb("snd_enveffectsprio_level", 3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `delete`;
funcDef.decl = `<entity> delete()`;
funcDef.desc = `Removes an entity from the game.`;
funcDef.example = `thing delete();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `destroy`;
funcDef.decl = `<hud> destroy()`;
funcDef.desc = `Remove this HUD element altogether.`;
funcDef.example = `self.bombStopwatch destroy();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `detach`;
funcDef.decl = `<entity> detach(<modelname>, <tagname>)`;
funcDef.desc = `Detaches an attached model from an entity.`;
funcDef.example = `self detach("xmodel/explosivepack", "tag_weapon_right");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `detachAll`;
funcDef.decl = `<entity> detachAll()`;
funcDef.desc = `Detaches all attached models from an entity.`;
funcDef.example = `self detachAll();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `detonate`;
funcDef.decl = `<entity> detonate(<newOwner>)`;
funcDef.desc = `Causes a grenade to explode. Must be called on a grenade.`;
funcDef.example = `grenade detonate(attacker);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `devAddPitch`;
funcDef.decl = `<entity> devAddPitch(<pitch angle>)`;
funcDef.desc = `Add pitch in local space. This is just for development purposes and doesn't interpolate.`;
funcDef.example = `ent devAddPitch(15);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `devAddRoll`;
funcDef.decl = `<entity> devAddRoll(<roll angle>)`;
funcDef.desc = `Add roll in local space. This is just for development purposes and doesn't interpolate.`;
funcDef.example = `ent devAddRoll(15);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `devAddYaw`;
funcDef.decl = `<entity> devAddYaw(<yaw angle>)`;
funcDef.desc = `Add yaw in local space. This is just for development purposes and doesn't interpolate.`;
funcDef.example = `ent devAddYaw(15);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `disableAimAssist`;
funcDef.decl = `<entity> disableAimAssist()`;
funcDef.desc = `Disables aim assist on an entity. The entity must have a brush model.`;
funcDef.example = `self disableAimAssist();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `disableGrenadeTouchDamage`;
funcDef.decl = `<entity> disableGrenadeTouchDamage()`;
funcDef.desc = `Disable grenade damage for damage triggers.`;
funcDef.example = `self disableGrenadeTouchDamage();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `disableInvulnerability`;
funcDef.decl = `<player> disableInvulnerability()`;
funcDef.desc = `Makes player vulnerable to damage. This is default behaviour.`;
funcDef.example = `level.player disableInvulnerability();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `disableTurretDismount`;
funcDef.decl = `<player> disableTurretDismount()`;
funcDef.desc = `Do not let player unstick themselves form a trugger that they are using.`;
funcDef.example = `level.player disableTurretDismount();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `disableWeapons`;
funcDef.decl = `<player> disableWeapons()`;
funcDef.desc = `Disable the player's weapons.`;
funcDef.example = `level.player disableWeapons();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `disconnectPaths`;
funcDef.decl = `<entity> disconnectPaths()`;
funcDef.desc = `Disconnects the paths that intersect with the entity. If the entity is a script_brushmodel then it must have DYNAMICPATH set to disconnect paths.`;
funcDef.example = `level.armoredCar disconnectPaths()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `distance`;
funcDef.decl = `distance(<point A>, <point B>)`;
funcDef.desc = `Returns the distance between two points.`;
funcDef.example = `dist = distance(org, ai[i].origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `distance2D`;
funcDef.decl = `distance2D(<point A>, <point B>)`;
funcDef.desc = `Returns the distance between two points, ignores height difference.`;
funcDef.example = `dist = distance2D(org, ai[i].origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `distanceSquared`;
funcDef.decl = `distanceSquared(<point A>, <point B>)`;
funcDef.desc = `Returns the squared distance between two points - this is cheaper than the actual distance as it doesn't involve a square root.`;
funcDef.example = `dist = distanceSquared(models[j].origin, center);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `doDamage`;
funcDef.decl = `<entity> doDamage(<health>, <source position>, <attacker>, <inflictor>)`;
funcDef.desc = `Does damage to an entity.`;
funcDef.example = `tank doDamage(tank.health + 200, (0, 0, 0));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `doSpawn`;
funcDef.decl = `<entity> doSpawn(<targetname>)`;
funcDef.desc = `Spawns an actor from an actor spawner, if possible (the spawner won't spawn if the player is looking at the spawn point, or if spawning would cause a telefrag).`;
funcDef.example = `spawned = driver doSpawn(name);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `dontInterpolate`;
funcDef.decl = `<entity> dontInterpolate()`;
funcDef.desc = `Pop the entity's position instantaneously to where it moves this time step, rather than smoothly moving there from the previous position.`;
funcDef.example = `entity dontInterpolate();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `drawCompassFriendlies`;
funcDef.decl = `drawCompassFriendlies(<bool>)`;
funcDef.desc = `Set whether friendlies are shown on the compass.`;
funcDef.example = `drawCompassFriendlies(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `dropItem`;
funcDef.decl = `<player> dropItem(<item name>)`;
funcDef.desc = `Drop an item with the given item name.`;
funcDef.example = `self dropItem(current);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `dropWeapon`;
funcDef.decl = `<actor> dropWeapon(<weapon name>, <hand>, <throw speed>)`;
funcDef.desc = `Disconnects the paths that intersect with the entity. If the entity is a script_brushmodel then it must have DYNAMICPATH set to disconnect paths.`;
funcDef.example = `self dropWeapon(self.weapon, self.anim_gunHand, throwVel);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `dumpAnims`;
funcDef.decl = `<entity> dumpAnims()`;
funcDef.desc = `Writes the anim tree out to the console.`;
funcDef.example = `self dumpAnims();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `dumpHistory`;
funcDef.decl = `<actor> dumpHistory()`;
funcDef.desc = `Dumps the actor's history to a bug report.`;
funcDef.example = `self dumpHistory();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `earthquake`;
funcDef.decl = `earthquake(<scale>, <duration>, <source>, <radius>)`;
funcDef.desc = `Create an earthquake at the given point.`;
funcDef.example = `earthquake(0.3, 3, self.origin, 850);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enableAimAssist`;
funcDef.decl = `<entity> enableAimAssist()`;
funcDef.desc = `Enables aim assist on an entity. The entity must have a brush model.`;
funcDef.example = `self enableAimAssist();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enableGrenadeTouchDamage`;
funcDef.decl = `<entity> enableGrenadeTouchDamage()`;
funcDef.desc = `Enable grenade damage for damage triggers.`;
funcDef.example = `self enableGrenadeTouchDamage();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enableHealthShield`;
funcDef.decl = `<player> enableHealthShield(<enabled>)`;
funcDef.desc = `Sets whether the player's health shield is active.`;
funcDef.example = `level.player enableHealthShield(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enableInvulnerability`;
funcDef.decl = `<player> enableInvulnerability()`;
funcDef.desc = `Makes player invulnerable to damage.`;
funcDef.example = `level.player enableInvulnerability();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enableLinkTo`;
funcDef.decl = `<entity> enableLinkTo()`;
funcDef.desc = `Enables linkTo for an entity.`;
funcDef.example = `self.bombTrigger enableLinkTo();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enableTurretDismount`;
funcDef.decl = `<player> enableTurretDismount()`;
funcDef.desc = `Player can dismount from turrets as normal.`;
funcDef.example = `level.player enableTurretDismount();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enableWeapons`;
funcDef.decl = `<player> enableWeapons()`;
funcDef.desc = `Enable the player's weapons.`;
funcDef.example = `level.player enableWeapons();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `endLocationSelection`;
funcDef.decl = `<player> endLocationSelection()`;
funcDef.desc = `Causes the player to leave location selection mode. Works with beginlocationselection().`;
funcDef.example = `self endLocationSelection();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `endPrediction`;
funcDef.decl = `<actor> endPrediction()`;
funcDef.desc = `End actor physics prediction.`;
funcDef.example = `self endPrediction();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `enterProne`;
funcDef.decl = `<actor> enterProne(<interpolation time>)`;
funcDef.desc = `Set the actor to enter the prone position.`;
funcDef.example = `self enterProne(1.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `entityRadiusDamage`;
funcDef.decl = `<entity> entityRadiusDamage(<origin>, <range>, <max damage>, <min damage>, <attacker>)`;
funcDef.desc = `Does damage to all damageable objects within a given radius. The amount of damage is linear according to how close the object is to the radius. See also damage/damageRadius if you don't wish to specify an entity the damage is coming from.`;
funcDef.example = `self entityRadiusDamage(level.player.origin, 500, max, min, attacker);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `eqOff`;
funcDef.decl = `<entity> eqOff()`;
funcDef.desc = `Disables EQ on an entity.`;
funcDef.example = `ai eqOff();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `eqOn`;
funcDef.decl = `<entity> eqOn()`;
funcDef.desc = `Enables EQ on an entity.`;
funcDef.example = `ai eqOn();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `exitLevel`;
funcDef.decl = `exitLevel(<save persistent>)`;
funcDef.desc = `Exits the current level.`;
funcDef.example = `exitLevel(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `exitProne`;
funcDef.decl = `<actor> exitProne(<interpolation time>)`;
funcDef.desc = `Set the actor to exit the prone position.`;
funcDef.example = `self exitProne(1.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fGetArg`;
funcDef.decl = `fGetArg(<file>, <arg>)`;
funcDef.desc = `Get a specific argument number from the current line.`;
funcDef.example = `data.id = fGetArg(file, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fPrintFields`;
funcDef.decl = `fPrintFields(<file>, <output> ...)`;
funcDef.desc = `Writes items out to a script-controlled file, inserting a comma in-between each one.`;
funcDef.example = `fPrintFields(file, player, health, weaponName);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fPrintLn`;
funcDef.decl = `fPrintLn(<file>, <output>)`;
funcDef.desc = `Write text out to a script-controlled file.`;
funcDef.example = `fPrintLn(file, "Hello world!");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fReadLn`;
funcDef.decl = `fReadLn(<file>)`;
funcDef.desc = `Read the next line of comma separated value text from a script-controlled file. Returns the number of comma separated values in the line.`;
funcDef.example = `fReadLn(file);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fadeOverTime`;
funcDef.decl = `<hud> fadeOverTime(<time>)`;
funcDef.desc = `Set a HUD element to transition in color (or alpha) over time. Normally setting the color (or alpha) of an element causes an immediate visual change. However, if the color (or alpha) gets set within <time> after calling fadeOverTime, then the HUD element will transition to the new color over the ramining <time>.`;
funcDef.example = `level.introString1 fadeOverTime(1.2);
level.introString1.alpha = 0.3; // This will transition the alpha from whatever it was before to the new value of 0.3 over 1.2 seconds.`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `findBestCoverNode`;
funcDef.decl = `<actor> findBestCoverNode(<nodemeaning>, <node>)`;
funcDef.desc = `Find the best cover node for a given NPC given his state.`;
funcDef.example = `self findBestCoverNode("prefer", here);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `findCoverNode`;
funcDef.decl = `<actor> findCoverNode()`;
funcDef.desc = `Finds a valid cover node for the character.`;
funcDef.example = `self findCoverNode();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `findReacquireDirectPath`;
funcDef.decl = `<actor> findReacquireDirectPath(<ignore suppression>)`;
funcDef.desc = `Finds a path directly to the enemy. Call reacquireMove to use the path.`;
funcDef.example = `self findReacquireDirectPath();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `findReacquireNode`;
funcDef.decl = `<actor> findReacquireNode()`;
funcDef.desc = `Finds a reacquire node when exposed.`;
funcDef.example = `self findReacquireNode();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `findReacquireProximatePath`;
funcDef.decl = `<actor> findReacquireProximatePath(<ignore suppression>)`;
funcDef.desc = `Finds a path to a point that can see the enemy without leaving goal. Call ReacquireMove to use the path.`;
funcDef.example = `self findReacquireProximatePath();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `finishPlayerDamage`;
funcDef.decl = `<player> finishPlayerDamage(<inflictor>, <attacker>, <damage>, <damage flags>, <means of death>, <weapon>, <origin>, <direction>, <hit loc>, <offsettime>)`;
funcDef.desc = `Does damage to a player - usually as part of the damage callback.`;
funcDef.example = `self finishPlayerDamage(eInflictor, eAttacker, iDamage, iDFlags, sMeansOfDeath, sWeapon, vPoint, vDir, sHitLoc, psOffsetTime);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fireGrenadeLauncher`;
funcDef.decl = `<actor> fireGrenadeLauncher(<barrel tag>)`;
funcDef.desc = `Use the grenadelauncher. checkGrenadeLaunchPos() or checkGrenadeLaunch() must be called first.`;
funcDef.example = `self fireGrenadeLauncher(tag);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fireWeapon`;
funcDef.decl = `<entity> fireWeapon(<barrel tag>, <target ent>, <target offset>)`;
funcDef.desc = `Fire the vehicle's weapon.`;
funcDef.example = `nFlak fireWeapon();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `flagEnemyUnattackable`;
funcDef.decl = `<actor> flagEnemyUnattackable()`;
funcDef.desc = `Set this actor not to attack its current enemy.`;
funcDef.example = `self flagEnemyUnattackable();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `forceViewmodelAnimation`;
funcDef.decl = `<player> forceViewmodelAnimation(<weapon name>, <anim name>)`;
funcDef.desc = `Forces the viewmodel to play the nightvision pulldown animation for the specified weapon.`;
funcDef.example = `level.player forceViewmodelAnimation("facemask", "reload");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `fragButtonPressed`;
funcDef.decl = `<player> fragButtonPressed()`;
funcDef.desc = `Check if the player is pressing the "frag" button.`;
funcDef.example = `if (self fragButtonPressed()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `freeVehicle`;
funcDef.decl = `<entity> freeVehicle()`;
funcDef.desc = `Free this vehicle instance.`;
funcDef.example = `self freeVehicle();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `freezeControls`;
funcDef.decl = `<player> freezeControls(<freeze state>)`;
funcDef.desc = `Blocks or unblocks control input from this player.`;
funcDef.example = `level.player freezeControls(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAIArray`;
funcDef.decl = `getAIArray(<team>...)`;
funcDef.desc = `Returns an array of the human AI.`;
funcDef.example = `array = getAIArray("axis", "neutral");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAISpeciesArray`;
funcDef.decl = `getAISpeciesArray(<team>, <species>)`;
funcDef.desc = `Returns an array of the AI.`;
funcDef.example = `array = getAISpeciesArray("axis", "all");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAllNodes`;
funcDef.decl = `getAllNodes()`;
funcDef.desc = `Gets all of the nodes in a level.`;
funcDef.example = `nodes = getAllNodes();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAllVehicleNodes`;
funcDef.decl = `getAllVehicleNodes()`;
funcDef.desc = `Gets all of the vehicle nodes in a level.`;
funcDef.example = `nodes = getAllVehicleNodes();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAmmoCount`;
funcDef.decl = `<player> getAmmoCount(<weapon>)`;
funcDef.desc = `Get the remaining ammo.`;
funcDef.example = `ammo = self getAmmountCount("tear_grenade_mp");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAngleDelta`;
funcDef.decl = `getAngleDelta(<anim>, <start time>, <end time>)`;
funcDef.desc = `Returns the rotation difference in the given animation.`;
funcDef.example = `This function has no official examples`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAnglesToLikelyEnemyPath`;
funcDef.decl = `<actor> getAnglesToLikelyEnemyPath()`;
funcDef.desc = `Get the angles towards the direction an enemy is most likely to appear. Returns undefined if a good guess can't be made.`;
funcDef.example = `self getAnglesToLikelyEnemyPath();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAnimAssetType`;
funcDef.decl = `getAnimAssetType(<animation>)`;
funcDef.desc = `Get the animation asset type (delta/relative/additive etc defined in xanim.gdf).`;
funcDef.example = `getAnimAssetType(%walk_and_run_loops)`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAnimLength`;
funcDef.decl = `getAnimLength(<animation>)`;
funcDef.desc = `Get the length of an animation.`;
funcDef.example = `cycleTime = getAnimLength(climbAnim);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAnimTime`;
funcDef.decl = `<entity> getAnimTime(<animation>)`;
funcDef.desc = `Get the animation time for the given animation.`;
funcDef.example = `if ((self getAnimTime(%walk_and_run_loops)) < 0.5)`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getArrayKeys`;
funcDef.decl = `getArrayKeys(<array>)`;
funcDef.desc = `Returns an array consisting of the keys of the input array.`;
funcDef.example = `result = getArrayKeys(array);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAssignedTeam`;
funcDef.decl = `getAssignedTeam(<player>)`;
funcDef.desc = `Returns the player's team as assigned by matchmaking. 0 = No team, 1 = Axis, 2 = Allies, 3 = Spectator.`;
funcDef.example = `team = getAssignedTeam(player);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAttachIgnoreCollision`;
funcDef.decl = `<entity> getAttachIgnoreCollision(<model index>`;
funcDef.desc = `Returns the ignore collision flag of the attached model at the given attachment slot.`;
funcDef.example = `ignoreCollision = self getAttachIgnoreCollision(index);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAttachModelName`;
funcDef.decl = `<entity> getAttachModelName(<model index>)`;
funcDef.desc = `Returns the name of the attached model at the given attachment slot.`;
funcDef.example = `model = self getAttachModelName(index);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAttachPos`;
funcDef.decl = `<entity> getAttachPos(<node>)`;
funcDef.desc = `Returns the origin and angles if the vehicle were to be attached to the path. The origin and angles are returned as a vector array of size 2. Origin is 1st and angles is 2nd.`;
funcDef.example = `pos = self getAttachPos(node);
origin = pos[0];
angles = pos[1];`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAttachSize`;
funcDef.decl = `<entity> getAttachSize()`;
funcDef.desc = `Returns the number of attached models for this entity.`;
funcDef.example = `size = self getAttachSize();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getAttachTagName`;
funcDef.decl = `<entity> getAttachTagName(<model index>)`;
funcDef.desc = `Returns the tagname of the attached model at the given attachment slot.`;
funcDef.example = `tag = self getAttachTagName(index);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getCentroid`;
funcDef.decl = `<entity> getCentroid()`;
funcDef.desc = `Gets the centroid of an entity.`;
funcDef.example = `centroid = self getCentroid();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getClanID`;
funcDef.decl = `<player> getClanID()`;
funcDef.desc = `Return the id of the player's clan.`;
funcDef.example = `player getClanID();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getClanName`;
funcDef.decl = `<player> getClanName()`;
funcDef.desc = `Return the name of the player's clan.`;
funcDef.example = `player getClanName();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getClosestEnemySqDist`;
funcDef.decl = `<entity> getClosestEnemySqDist()`;
funcDef.desc = `Get the distance to the nearest enemy.`;
funcDef.example = `dist = self getClosestEnemySqDist();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getCommandFromKey`;
funcDef.decl = `getCommandFromKey(<key>)`;
funcDef.desc = `Gets the command bound to the key. Applicable values are: "Z", "BUTTON_LSTICK", "BUTTON_START", "Space", ...`;
funcDef.example = `command = getCommandFromKey("BUTTON_LSTICK");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getCoverNode`;
funcDef.decl = `<actor> getCoverNode()`;
funcDef.desc = `Gets this actor's cover node.`;
funcDef.example = `node = self getCoverNode();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getCurrentOffhand`;
funcDef.decl = `<player> getCurrentOffhand()`;
funcDef.desc = `Gets the player's current off-hand weapon (usually a grenade).`;
funcDef.example = `currentWeapon = level.player getCurrentOffhand();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getCurrentWeapon`;
funcDef.decl = `<player> getCurrentWeapon()`;
funcDef.desc = `Gets the player's current weapon.`;
funcDef.example = `currentWeapon = level.player getCurrentWeapon();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getCurrentWeaponClipAmmo`;
funcDef.decl = `<player> getCurrentWeaponClipAmmo()`;
funcDef.desc = `Gets the amount of ammo left in the player's clip.`;
funcDef.example = `bulletCount = level.player getCurrentWeaponClipAmmo();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getCycleOriginOffset`;
funcDef.decl = `getCycleOriginOffset(<angles>, <animation>)`;
funcDef.desc = `For the given animation cycle and angle set, calculate the final offset of the animation.`;
funcDef.example = `This function has no official examples.`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDebugDvar`;
funcDef.decl = `getDebugDvar(<dvar>)`;
funcDef.desc = `Gets the value of a debug dvar, as a string.`;
funcDef.example = `if (getDebugDvar("debug") != "1")`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDebugDvarFloat`;
funcDef.decl = `getDebugDvarFloat(<dvar>)`;
funcDef.desc = `Gets the value of a debug dvar, as a floating point number.`;
funcDef.example = `if (getDebugDvarFloat("debug_stopenemypos") < -1)`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDebugDvarInt`;
funcDef.decl = `getDebugDvarInt(<dvar>)`;
funcDef.desc = `Gets the value of a debug dvar, as an integer.`;
funcDef.example = `if (getDebugDvarInt("debug_stopenemypos") != -1)`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDebugEye`;
funcDef.decl = `<entity> getDebugEye()`;
funcDef.desc = `Gets the debug position of the eye for an AI or Player.`;
funcDef.example = `eyePos = level.player getDebugEye();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDifficulty`;
funcDef.decl = `getDifficulty()`;
funcDef.desc = `Gets the game difficulty - can return values of "easy", "medium", "difficult" and "fu".`;
funcDef.example = `skill = getDifficulty();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDvar`;
funcDef.decl = `getDvar(<dvar>)`;
funcDef.desc = `Gets the value of a dvar, as a string.`;
funcDef.example = `if (getDvar("debug_skipintro") == "on")`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDvarFloat`;
funcDef.decl = `getDvarFloat(<dvar>)`;
funcDef.desc = `Gets the value of a dvar, as a floating point number.`;
funcDef.example = `oldDelay = getDvarFloat("effect_delay");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getDvarInt`;
funcDef.decl = `getDvarInt(<dvar>)`;
funcDef.desc = `Gets the value of a dvar, as an integer.`;
funcDef.example = `level.fogtype = getDvarInt("scr_fog_type");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEnemySqDist`;
funcDef.decl = `<entity> getEnemySqDist()`;
funcDef.desc = `Get the distance to the nearest enemy. Deprecated, use getClosestEnemySqDist.`;
funcDef.example = `dist = self getEnemySqDist();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEngineVolume`;
funcDef.decl = `<entity> getEngineVolume()`;
funcDef.desc = `Gets the volume of engine sound for this vehicle (the scaling value set by setEngineVolume). The volume of the soundalias itself may be less than 1.0.`;
funcDef.example = `scale = helicopter getEngineVolume();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEnt`;
funcDef.decl = `getEnt(<name>, <key>)`;
funcDef.desc = `Looks up an entity by a given KVP.`;
funcDef.example = `spawner = getEnt("doorguy1", "targetname");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEntArray`;
funcDef.decl = `getEntArray(<name>, <key>)`;
funcDef.desc = `Gets an array of entites that have the given KVP.`;
funcDef.example = `aeExplosions = getEntArray(strExplosion, "targetname");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEntByNum`;
funcDef.decl = `getEntByNum(<entity number>)`;
funcDef.desc = `Gets an entity by its entity number.`;
funcDef.example = `entity = getEntByNum(entNum);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEntNum`;
funcDef.decl = `<entity> getEntNum()`;
funcDef.desc = `Gets the entity number of this entity.`;
funcDef.example = `selfNum = self getEntNum();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEntityNumber`;
funcDef.decl = `<entity> getEntityNumber()`;
funcDef.desc = `Gets the entity number of this entity.`;
funcDef.example = `selfNum = self getEntityNumber();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getEye`;
funcDef.decl = `<entity> getEye()`;
funcDef.desc = `Gets the position of the eye for an AI or player.`;
funcDef.example = `eyePos = level.player getEye();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getFXVisibility`;
funcDef.decl = `getFXVisibility(<start>, <end>)`;
funcDef.desc = `Returns the amount of visibilty (0.0 - 1.0) between the start and end points.`;
funcDef.example = `vis = getFXVisibility(start, end);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getFixedNodeSafeVolume`;
funcDef.decl = `<actor> getFixedNodeSafeVolume()`;
funcDef.desc = `Gets this actor's fixed node safe volume.`;
funcDef.example = `volume = self getFixedNodeSafeVolume();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getFlashBangedStrength`;
funcDef.decl = `<actor> getFlashBangedStrength()`;
funcDef.desc = `Retrieves how strongly the actor was initially hit by a flashbang. 1.0 is full strength, 0.0 is none at all.`;
funcDef.example = `flashedPercent = self getFlashBangedStrength();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getFractionMaxAmmo`;
funcDef.decl = `<player> getFractionMaxAmmo(<weapon>)`;
funcDef.desc = `Return the player's current ammunition amount as a fraction of the weapon's maximum amunition.`;
funcDef.example = `frac = self getFractionMaxAmmo("m4_grenadier");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getFractionStartAmmo`;
funcDef.decl = `<player> getFractionStartAmmo(<weapon>)`;
funcDef.desc = `Return the player's current ammunition amount as a fraction of the weapon's starting amunition.`;
funcDef.example = `frac = self getFractionStartAmmo("mosin_nagant");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getGoalSpeedMPH`;
funcDef.decl = `<entity> getGoalSpeedMPH()`;
funcDef.desc = `Gets the goal speed in miles per hour.`;
funcDef.example = `goalSpeed = self getGoalSpeedMPH();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getKeyBinding`;
funcDef.decl = `getKeyBinding(<key binding>)`;
funcDef.desc = `Gets a key binding. Applicable values are: "+scores", "+speed", "+forward", "+back", "+moveleft", "+moveright", "+moveup", "+movedown", "+left", "+right", "+strafe", "+lookup", "+lookdown", "+mlook", "centerview", "toggleads", "+melee", "+prone", "lowerstance", "raisestance", "togglecrouch", "toggleprone", "goprone", "gocrouch", "+gostand", "weaponslot primary", "weaponslot primaryb", "+attack", "weapprev", "weapnext", "+activate", "+reload", "+leanleft", "+leanright", "screenshot", "screenshotJPEG", ...`;
funcDef.example = `firekey = getKeyBinding("+attack");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getLightColor`;
funcDef.decl = `<entity> getLightColor()`;
funcDef.desc = `Gets the current color of the light as an RGB vector.`;
funcDef.example = `color = self getLightColor();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getLightExponent`;
funcDef.decl = `<entity> getLightExponent()`;
funcDef.desc = `Gets the current exponent of the light.`;
funcDef.example = `exponent = self getLightExponent();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getLightFovInner`;
funcDef.decl = `<entity> getLightFovInner()`;
funcDef.desc = `Gets the current inner FOV of a spot light.`;
funcDef.example = `radius = self getLightFovInner();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getLightFovOuter`;
funcDef.decl = `<entity> getLightFovOuter()`;
funcDef.desc = `Gets the current outer FOV of a spot light.`;
funcDef.example = `radius = self getLightFovOuter();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getLightIntensity`;
funcDef.decl = `<entity> getLightIntensity()`;
funcDef.desc = `Gets the current intensity of the light.`;
funcDef.example = `intensity = self getLightIntensity();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getLightRadius`;
funcDef.decl = `<entity> getLightRadius()`;
funcDef.desc = `Gets the current radius of the light.`;
funcDef.example = `radius = self getLightRadius();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getMapSunDirection`;
funcDef.decl = `getMapSunDirection()`;
funcDef.desc = `Return the BSP's default sun direction.`;
funcDef.example = `level.defaultSunDir = getMapSunDirection();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getMapSunLight`;
funcDef.decl = `getMapSunLight()`;
funcDef.desc = `Return the default sun color for a level in an array of size 3. Index 0 is red, index 1 is green, and index 2 is blue.`;
funcDef.example = `level.defaultSunLight = getMapSunLight();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getMoveDelta`;
funcDef.decl = `getMoveDelta(<anim>, <start time>, <end time>)`;
funcDef.desc = `Returns the movement vector difference in the given animation.`;
funcDef.example = `This function has no official examples.`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNode`;
funcDef.decl = `getNode(<name>, <key>)`;
funcDef.desc = `Gets a node with a given name, key pair.`;
funcDef.example = `node = getNode(self.target, "targetname");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNodeArray`;
funcDef.decl = `getNodeArray(<name>, <key>)`;
funcDef.desc = `Gets an array of nodes with a given name, key pair.`;
funcDef.example = `nodes = getNodeArray(self.target, "targetname");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNormalHealth`;
funcDef.decl = `<entity> getNormalHealth()`;
funcDef.desc = `Gets the normal health of this entity.`;
funcDef.example = `health = entity getNormalHealth();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNormalizedMovement`;
funcDef.decl = `<player> getNormalizedMovement()`;
funcDef.desc = `Get the player's normalized movement vector. Returns [-1, 1] for X (forward) and Y (right) based on player's input.`;
funcDef.example = `movement = self getNormalizedMovement();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNorthYaw`;
funcDef.decl = `getNorthYaw()`;
funcDef.desc = `Returns the yaw value of North.`;
funcDef.example = `northYaw = getNorthYaw();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNotetrackTimes`;
funcDef.decl = `getNotetrackTimes(<animation>, <note track>)`;
funcDef.desc = `Gets an array of the times during an animation that the given notetrack occurs. The times returned are fractional (0 to 1).`;
funcDef.example = `exitAlignTimes = getNotetrackTimes(exitAnim, "exit_align");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNumParts`;
funcDef.decl = `getNumParts(<xmodel name>)`;
funcDef.desc = `Gets the number of bones in the xmodel.`;
funcDef.example = `parts = getNumParts("viewhands_player_blackkit");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getNumVehicles`;
funcDef.decl = `getNorthYaw()`;
funcDef.desc = `Gets the number of vehicle entities in the level.`;
funcDef.example = `vehicleCount = getNumVehicles();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getOffhandSecondaryClass`;
funcDef.decl = `<player> getOffhandSecondaryClass()`;
funcDef.desc = `Gets the name (either "smoke" or "flash") that toggle is set to.`;
funcDef.example = `if ("flash" == level.player getOffhandSecondaryClass()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getOrigin`;
funcDef.decl = `<entity> getOrigin()`;
funcDef.desc = `Gets the origin of an entity.`;
funcDef.example = `origin = self getOrigin();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getPartName`;
funcDef.decl = `getPartName(<xmodel name>, <index>)`;
funcDef.desc = `Gets the name of a part of a model.`;
funcDef.example = `partName = getPartName(self.hatModel, 0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getPlayerAngles`;
funcDef.decl = `<player> getPlayerAngles()`;
funcDef.desc = `Get the player's angles.`;
funcDef.example = `angles = level.player getPlayerAngles();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getPlayerViewHeight`;
funcDef.decl = `<player> getPlayerViewHeight()`;
funcDef.desc = `Get the player's view height.`;
funcDef.example = `height = level.player getPlayerViewHeight();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getReflectionLocs`;
funcDef.decl = `getReflectionLocs()`;
funcDef.desc = `Gets an array of the locations of all of the reflection_probes in the level.`;
funcDef.example = `reflectionLocs = getReflectionLocs();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getShootAtPos`;
funcDef.decl = `<entity> getShootAtPos()`;
funcDef.desc = `Gets the position an attacker would shoot at to hit this entity. For AI or player this is the eye position. For other entities it's the tag_eye if there is one, else the center of the entity bounding box.`;
funcDef.example = `targetPos = self.enemy getShootAtPos();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getSpawnerArray`;
funcDef.decl = `getSpawnerArray()`;
funcDef.desc = `Returns an array of all the spawners in a level.`;
funcDef.example = `spawners = getSpawnerArray();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getSpawnerTeamArray`;
funcDef.decl = `getSpawnerTeamArray(<team>...)`;
funcDef.desc = `Returns an array of all the spawners in a level of a certain team.`;
funcDef.example = `enemies = getSpawnerTeamArray("axis", "neutral");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getSpeed`;
funcDef.decl = `<entity> getSpeed()`;
funcDef.desc = `Gets the current speed in inches per second.`;
funcDef.example = `speed = self getSpeed();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getSpeedMPH`;
funcDef.decl = `<entity> getSpeedMPH()`;
funcDef.desc = `Gets the current speed in miles per hour.`;
funcDef.example = `speed = self getSpeedMPH();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getStance`;
funcDef.decl = `<player> getStance()`;
funcDef.desc = `Gets the stance of the player. It only works for the player. Possible return values are "crouch", "prone" and "stand".`;
funcDef.example = `if (level.player getStance() == "crouch") {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getStartAngles`;
funcDef.decl = `getStartAngles(<origin>, <angles>, <animation>)`;
funcDef.desc = `Get the starting angles for an animation, in world coordinates, given its current position, and angles.`;
funcDef.example = `org1 = getStartAngles(climborg, climbang, buddyanim1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getStartOrigin`;
funcDef.decl = `getStartOrigin(<origin>, <angles>, <animation>)`;
funcDef.desc = `Get the starting origin for an animation, in world coordinates, given its current position, and angles.`;
funcDef.example = `org1 = getStartOrigin(climborg, climbang, buddyanim1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getStartTime`;
funcDef.decl = `getStartTime()`;
funcDef.desc = `Returns the start time for the current round.`;
funcDef.example = `level.startTime = getStartTime();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getSubStr`;
funcDef.decl = `getSubStr(<string>, <start index>, <end index>)`;
funcDef.desc = `Returns the substring of characters >= start index and < end index.`;
funcDef.example = `guid = getSubStr(self getGuid(), 24, 32);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTagAngles`;
funcDef.decl = `<entity> getTagAngles(<tagname>)`;
funcDef.desc = `Gets the angles of a particular tag on this model.`;
funcDef.example = `leftorg = self getTagAngles("tag_wheel_back_left");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTagOrigin`;
funcDef.decl = `<entity> getTagOrigin(<tagname>)`;
funcDef.desc = `Gets the origin of a particular tag on this model.`;
funcDef.example = `leftorg = self getTagOrigin("tag_wheel_back_left");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTeamPlayersAlive`;
funcDef.decl = `getTeamPlayersAlive(<team>)`;
funcDef.desc = `Returns the number of players still alive on a given team.`;
funcDef.example = `alive = getTeamPlayersAlive("allies");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTeamRadar`;
funcDef.decl = `getTeamRadar(<team>)`;
funcDef.desc = `Gets whether a team has radar or not.`;
funcDef.example = `if (getTeamRadar("allies")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTeamScore`;
funcDef.decl = `getTeamScore(<team>)`;
funcDef.desc = `Get a team's score.`;
funcDef.example = `if (getTeamScore("allies") > getTeamScore("axis")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getThreatBias`;
funcDef.decl = `getThreatBias(<group 1>, <group 2>)`;
funcDef.desc = `Get threat bias of first group against second group.`;
funcDef.example = `bias = getThreatBias("axis", "flanking_team");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getThreatBiasGroup`;
funcDef.decl = `getThreatBiasGroup()`;
funcDef.desc = `Get the threat bias group of an AI or player.`;
funcDef.example = `group = self getThreatBiasGroup();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTime`;
funcDef.decl = `getTime()`;
funcDef.desc = `Gets the level time milliseconds from the start of the level.`;
funcDef.example = `nextNodeTime = getTime() + 500;`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTimeScale`;
funcDef.decl = `getTimeScale()`;
funcDef.desc = `Gets the current timescale.`;
funcDef.example = `timeScale = getTimeScale();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTurretOwner`;
funcDef.decl = `<entity> getTurretOwner()`;
funcDef.desc = `Gets the owner of this turret.`;
funcDef.example = `mg42User = roofMg42 getTurretOwner();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getTurretTarget`;
funcDef.decl = `<entity> getTurretTarget()`;
funcDef.desc = `Gets the current target of this turret.`;
funcDef.example = `target = roofMg42 getTurretTarget();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getVehicleNode`;
funcDef.decl = `getVehicleNode(<name>, <key>)`;
funcDef.desc = `Gets a vehicle node with the given name, key pair.`;
funcDef.example = `node = getVehicleNode(self.target, "targetname");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getVehicleNodeArray`;
funcDef.decl = `getVehicleNode(<name>, <key>)`;
funcDef.desc = `Gets an array of vehicle nodes that have the given name, key pai.`;
funcDef.example = `nodes = getVehicleNodeArray(self.target, "targetname");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getVehicleOwner`;
funcDef.decl = `<entity> getVehicleOwner()`;
funcDef.desc = `Returns the owner of this particular vehicle.`;
funcDef.example = `eFlak88User = eFlak88 getVehicleOwner();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getVelocity`;
funcDef.decl = `<player> getVelocity()`;
funcDef.desc = `Gets the player's velocity.`;
funcDef.example = `vel = level.player getVelocity();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getViewModel`;
funcDef.decl = `<player> getViewModel()`;
funcDef.desc = `Get the viewmodel name for the given player.`;
funcDef.example = `info[ "viewmodel" ] = self getViewModel();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getWeaponAmmoClip`;
funcDef.decl = `<player> getWeaponAmmoClip(<weapon>)`;
funcDef.desc = `Get the amount of ammo left in the player's weapon's current clip.`;
funcDef.example = `clipCount = level.player getWeaponAmmoClip("uzi");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getWeaponAmmoStock`;
funcDef.decl = `<player> getWeaponAmmoStock(<weapon>)`;
funcDef.desc = `Get the ammunition stockpile for the given weapon.`;
funcDef.example = `stockCount = level.player getWeaponAmmoStock("m4_grenadier");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getWeaponClipModel`;
funcDef.decl = `getWeaponClipModel(<weapon>)`;
funcDef.desc = `Returns the name of the weapon clip/magazine model used for the given weapon.`;
funcDef.example = `model = getWeaponClipModel("m16_basic");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getWeaponModel`;
funcDef.decl = `getWeaponModel(<weapon>, <variant>)`;
funcDef.desc = `Returns the name of the weapon model used for the given weapon.`;
funcDef.example = `model = getWeaponModel("mosin_nagant_sniper", 0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getWeaponsList`;
funcDef.decl = `<player> getWeaponsList()`;
funcDef.desc = `Gets an array of all weapons that the player has. Includes any alt-mode weapons (eg: m203_m4).`;
funcDef.example = `weaponList = level.player getWeaponsList();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getWeaponsListPrimaries`;
funcDef.decl = `<player> getWeaponsListPrimaries()`;
funcDef.desc = `Gets an array of all primary weapons that the player has.`;
funcDef.example = `weaponList = level.player getWeaponsListPrimaries();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `getWheelSurface`;
funcDef.decl = `<entity> getWheelSurface(<wheel>)`;
funcDef.desc = `Returns the surface type of the given wheel as a string.`;
funcDef.example = `surface = self getWheelSurface(side);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `giveMaxAmmo`;
funcDef.decl = `<player> giveMaxAmmo(<weapon>)`;
funcDef.desc = `Set the player's ammunition to the weapon's maximum ammunition.`;
funcDef.example = `self giveMaxAmmo(self.pers["weapon"]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `giveStartAmmo`;
funcDef.decl = `<player> giveStartAmmo(<weapon>)`;
funcDef.desc = `Set the player's ammunition to the weapon's default starting ammunition.`;
funcDef.example = `self giveStartAmmo(self.pers["weapon"]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `giveWeapon`;
funcDef.decl = `<player> giveWeapon(<weapon>, <variant>)`;
funcDef.desc = `Give the player a weapon.`;
funcDef.example = `self giveWeapon("m1garand");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `hasEQ`;
funcDef.decl = `<entity> hasEQ()`;
funcDef.desc = `Checks if an entity has EQ enabled.`;
funcDef.example = `if (ai hasEQ()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `hasPerk`;
funcDef.decl = `<player> hasPerk(<perk>)`;
funcDef.desc = `Test if player has a perk.`;
funcDef.example = `if (player hasPerk("specialty_gpsjammer")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `hasWeapon`;
funcDef.decl = `<player> hasWeapon(<perk>)`;
funcDef.desc = `Test if player has the given weapon.`;
funcDef.example = `if (player hasWeapon("panzerfaust")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `hide`;
funcDef.decl = `<entity> hide()`;
funcDef.desc = `Hides a visible entity.`;
funcDef.example = `brokenWindow hide();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `hidePart`;
funcDef.decl = `<entity> hidePart(<tagname>, <modelname>)`;
funcDef.desc = `Hide part of an entity.`;
funcDef.example = `self hidePart("tag_weapon", "weapon_saw");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `hideViewModel`;
funcDef.decl = `<player> hideViewModel()`;
funcDef.desc = `Hide the player's current view modeL.`;
funcDef.example = `level.player hideViewModel();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `iPrintLn`;
funcDef.decl = `iPrintLn(<text>)`;
funcDef.desc = `Write line to the screen.`;
funcDef.example = `iPrintLn("Where have all the cowboys gone?");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `iPrintLnBold`;
funcDef.decl = `iPrintLnBold(<text>)`;
funcDef.desc = `Write bold line to the screen.`;
funcDef.example = `iPrintLnBold("Mitchell!");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `int`;
funcDef.decl = `int(<value>)`;
funcDef.desc = `Casts a floating point number or a string to an integer.`;
funcDef.example = `x = int(self.hudHealthHeight);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isAI`;
funcDef.decl = `isAI(<entity>)`;
funcDef.desc = `Checks whether this entity is an AI character.`;
funcDef.example = `if (isAI(gunOwner)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isAlive`;
funcDef.decl = `isAlive(<entity>)`;
funcDef.desc = `Checks whether this entity is alive.`;
funcDef.example = `if (isAlive(gunOwner)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isArray`;
funcDef.decl = `isArray(<variable>)`;
funcDef.desc = `Checks whether this variable is an array.`;
funcDef.example = `if (isArray(var)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isCinematicPlaying`;
funcDef.decl = `isCinematicPlaying()`;
funcDef.desc = `Checks if a cinematic is playing.`;
funcDef.example = `isPlaying = isCinematicPlaying();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isDefined`;
funcDef.decl = `isDefined(<variable>)`;
funcDef.desc = `Checks whether this variable is defined.`;
funcDef.example = `if (isDefined(var)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isFiring`;
funcDef.decl = `<player> isFiring()`;
funcDef.desc = `Returns true if the player is currently using a weapon.`;
funcDef.example = `if (level.player isFiring()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isFiringTurret`;
funcDef.decl = `<entity> isFiringTurret()`;
funcDef.desc = `Checks whether this turret is firing. The entity must be a turret.`;
funcDef.example = `if (mg42 isFiringTurret()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isGodMode`;
funcDef.decl = `isGodMode(<entity>)`;
funcDef.desc = `Checks whether this entity is in god mode.`;
funcDef.example = `if (isGodMode(level.player)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isLookingAt`;
funcDef.decl = `<player> isLookingAt(<entity>)`;
funcDef.desc = `Returns true if the entity is the same as the player's lookat entity.`;
funcDef.example = `if (level.player isLookingAt(trigger)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isMantling`;
funcDef.decl = `<player> isMantling()`;
funcDef.desc = `Return true if the player is mantling, false otherwise.`;
funcDef.example = `self isMantling();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isMeleeing`;
funcDef.decl = `<player> isMeleeing()`;
funcDef.desc = `Returns true if the player is currently using meleeing.`;
funcDef.example = `if (level.player isMeleeing()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isOnGround`;
funcDef.decl = `<player> isOnGround()`;
funcDef.desc = `Returns true if the player is on the ground.`;
funcDef.example = `if (level.player isOnGround()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isOnLadder`;
funcDef.decl = `<player> isOnLadder()`;
funcDef.desc = `Return true if the player is on a ladder, false otherwise.`;
funcDef.example = `self isOnLadder();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isPlayer`;
funcDef.decl = `isPlayer(<entity>)`;
funcDef.desc = `Checks whether this entity is a player.`;
funcDef.example = `if (isPlayer(gunOwner)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isPlayerNumber`;
funcDef.decl = `isPlayerNumber(<entity number>)`;
funcDef.desc = `Returns true if the passed integer is a valid client number.`;
funcDef.example = `isPlayerNumber(randomClientNumber);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isRagdoll`;
funcDef.decl = `<player> isRagdoll()`;
funcDef.desc = `Returns true if the entity is a ragdoll body, false otherwise.`;
funcDef.example = `self isRagdoll();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isSaveRecentlyLoaded`;
funcDef.decl = `isSaveRecentlyLoaded()`;
funcDef.desc = `Checks if the current savegame has recently been loaded.`;
funcDef.example = `if (isSaveRecentlyLoaded()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isSaveSuccessful`;
funcDef.decl = `isSaveSuccessful()`;
funcDef.desc = `Checks if the last saved game was successfully saved.`;
funcDef.example = `if (isSaveSuccessful()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isSentient`;
funcDef.decl = `isSentient(<entity>)`;
funcDef.desc = `Checks whether this entity is a sentient, that is either an AI character or the player.`;
funcDef.example = `if (isSentient(vehicle.riders[j])) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isSplitScreen`;
funcDef.decl = `isSplitScreen()`;
funcDef.desc = `Returns true if the game is a splitscreen game.`;
funcDef.example = `level.splitscreen = isSplitScreen();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isString`;
funcDef.decl = `isString(<variable>)`;
funcDef.desc = `Checks whether this variable is a string.`;
funcDef.example = `if (isString(var)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isSubStr`;
funcDef.decl = `isSubStr(<string>, <substring>)`;
funcDef.desc = `Returns true/false if substring is a substring of string. Case sensitive.`;
funcDef.example = `if (isSubStr(self.classname, "axis") || isSubStr(self.classname, "enemy")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isTalking`;
funcDef.decl = `<player> isTalking()`;
funcDef.desc = `Returns true if the player is talking via voice chat.`;
funcDef.example = `self isTalking();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isThrowingGrenade`;
funcDef.decl = `<player> isThrowingGrenade()`;
funcDef.desc = `Returns true if the player is currently throwing a grenade.`;
funcDef.example = `if (level.player isThrowingGrenade()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isTouching`;
funcDef.decl = `<entity> isTouching(<touched entity>)`;
funcDef.desc = `Checks if an entity is touching a specified entity.`;
funcDef.example = `if (level.player isTouching(self)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isTurretReady`;
funcDef.decl = `<entity> isTurretReady()`;
funcDef.desc = `Query whether this vehicle's turret is ready for firing.`;
funcDef.example = `while (!level.playerTank isTurretReady()) {
	wait .05;
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isValidGameType`;
funcDef.decl = `isValidGameType(<game type>)`;
funcDef.desc = `Returns true if the string is a valid game type.`;
funcDef.example = `isValid = isValidGameType(getDvar("g_gametype"));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isWaitingOnSound`;
funcDef.decl = `<entity> isWaitingOnSound()`;
funcDef.desc = `Checks if this entity is waiting on a sound notify.`;
funcDef.example = `if (car isWaitingOnSound()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isWeaponClipOnly`;
funcDef.decl = `isWeaponClipOnly(<weapon>)`;
funcDef.desc = `Returns true if the weapon is clip only.`;
funcDef.example = `if (isWeaponClipOnly("c4")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `isWeaponDetonationTimed`;
funcDef.decl = `isWeaponDetonationTimed(<weapon>)`;
funcDef.desc = `Returns true if the weapon has timed detonation (e.g. frag/smoke grenades).`;
funcDef.example = `if (isWeaponDetonationTimed("c4")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `itemWeaponSetAmmo`;
funcDef.decl = `<entity> itemWeaponSetAmmo(<clip ammo>, <stock ammo>, <alt weapon>)`;
funcDef.desc = `Sets the ammo amount for a weapon item entity (lying on the ground).`;
funcDef.example = `weapon itemWeaponSetAmmo(5, 20);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `joltBody`;
funcDef.decl = `<entity> getWheelSurface(<jolt position>, <intensity>, <speedFrac>, <deceleration>)`;
funcDef.desc = `Jolts the vehicle.`;
funcDef.example = `self joltBody(self.origin + (0, 0, 64), 0.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `kick`;
funcDef.decl = `kick(<clientnum>)`;
funcDef.desc = `Kicks the specified player.`;
funcDef.example = `kick(clientnum);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `laserOff`;
funcDef.decl = `<entity> laserOff()`;
funcDef.desc = `Turns off an entity's laser sight.`;
funcDef.example = `self laserOff();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `laserOn`;
funcDef.decl = `<entity> laserOn()`;
funcDef.desc = `Turns on an entity's laser sight.`;
funcDef.example = `self laserOn();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `launch`;
funcDef.decl = `<entity> launch(<initial velocity>)`;
funcDef.desc = `Launch an object that interacts with the world, using an initial velocity. From this point on this object will no longer block either missiles or bullets.`;
funcDef.example = `self launch((x, y, z));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `length`;
funcDef.decl = `length(<vector>)`;
funcDef.desc = `Returns the length of the given vector.`;
funcDef.example = `dist = length(models[j].origin - center);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `lengthSquared`;
funcDef.decl = `lengthSquared(<vector>)`;
funcDef.desc = `Returns the squared vector length of the given vector - this is cheaper than the actual vector length as it doesn't involve a square root.`;
funcDef.example = `dist = lengthSquared(models[j].origin - center);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `lerpSunDirection`;
funcDef.decl = `lerpSunDirection(<dir to sun now>, <dir to sun at end>, <lerp time>)`;
funcDef.desc = `Overrides the sun direction for a level. Use "resetSunDirection" to revert to the map's values. The direction will lerp from the current direction on the client.`;
funcDef.example = `lerpSunDirection((-0.5, 0.5, -1.0), (-0.5, -0.5, -1.0), 1.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `line`;
funcDef.decl = `line(<start>, <end>, <color>, <depthTest>, <duration>)`;
funcDef.desc = `Draw a debug line on screen.`;
funcDef.example = `line(self.origin, self.origin + forwardFar, (0.9, 0.7, 0.6), false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `linkTo`;
funcDef.decl = `<entity> linkTo(<linkTo entity>, <tag>, <originOffset>, <anglesOffset>)`;
funcDef.desc = `Attaches on entity to another.`;
funcDef.example = `self.rightTurret linkTo(self, "tag_gunRight", (0, 0, 0), (0, 0, 0));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `loadFX`;
funcDef.decl = `loadFX(<filename>)`;
funcDef.desc = `Load the given effect.`;
funcDef.example = `fx = loadFX("explosions/large_vehicle_explosion");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `localToWorldCoors`;
funcDef.decl = `<entity> localToWorldCoords(<local coordinate>)`;
funcDef.desc = `Transform the given local coordinate point to a world coordinate point.`;
funcDef.example = `ramboPoint = self localToWorldCoors(delta);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `lockLightVis`;
funcDef.decl = `<entity> lockLightVis()`;
funcDef.desc = `Locks the lights that are visible by this entity to reduce the calculations for fast entities.`;
funcDef.example = `spawn lockLightVis();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `logPrint`;
funcDef.decl = `logPrint(<string>)`;
funcDef.desc = `Prints to the server log file.`;
funcDef.example = `logPrint("J;" + self getGuid() + ";" + self getEntityNumber() + ";" + self.name + "\\n");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `magicBullet`;
funcDef.decl = `magicBullet(<weapon>, <source>, <destination>)`;
funcDef.desc = `Fire a "magic bullet" from the source location towards the destination point.`;
funcDef.example = `magicBullet("mosin_nagant_sniper", self.origin, target.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `magicGrenade`;
funcDef.decl = `<entity> magicGrenade(<origin>, <target position>, <time to blow>)`;
funcDef.desc = `Creates a "magic" grenade from an actor.`;
funcDef.example = `self magicGrenade(self.origin, target.origin, 2.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `magicGrenadeManual`;
funcDef.decl = `<entity> magicGrenadeManual(<origin>, <velocity>, <time to blow>)`;
funcDef.desc = `Creates a "magic" grenade from an actor.`;
funcDef.example = `level.price magicGrenadeManual(start, vec, 1.1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `makeDvarServerInfo`;
funcDef.decl = `makeDvarServerInfo(<dvar name>, <dvar value>)`;
funcDef.desc = `Flags a dvar with the DVAR_CODINFO flag.`;
funcDef.example = `makeDvarServerInfo("ui_ctf_timelimit", "30");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `makeTurretUnusable`;
funcDef.decl = `<entity> makeTurretUnusable()`;
funcDef.desc = `Sets a turret to be unable to be used.`;
funcDef.example = `roofMg42 makeTurretUnusable();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `makeTurretUsable`;
funcDef.decl = `<entity> makeTurretUsable()`;
funcDef.desc = `Sets a turret able to be used.`;
funcDef.example = `roofMg42 makeTurretUsable();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `makeVehicleUnusable`;
funcDef.decl = `<entity> makeVehicleUnusable()`;
funcDef.desc = `Sets this vehicle to be not usable by the player.`;
funcDef.example = `car makeVehicleUnusable();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `makeVehicleUsable`;
funcDef.decl = `<entity> makeVehicleUsable()`;
funcDef.desc = `Sets this vehicle to be usable by the player.`;
funcDef.example = `nFlak makeVehicleUsable();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `map`;
funcDef.decl = `map(<map name>, <save persistent>)`;
funcDef.desc = `Loads a new map.`;
funcDef.example = `map("mp_crash");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `mapExists`;
funcDef.decl = `mapExists(<map name>)`;
funcDef.desc = `Returns true if the map with the given name exists on the server`;
funcDef.example = `mapExists("mp_crash");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `map_restart`;
funcDef.decl = `map_restart(<save persistent>)`;
funcDef.desc = `Restarts the map.`;
funcDef.example = `map_restart(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `meleeButtonPressed`;
funcDef.decl = `<player> meleeButtonPressed()`;
funcDef.desc = `Check if the player is pressing the "melee" button.`;
funcDef.example = `if (self meleeButtonPressed()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missile_createAttractorEnt`;
funcDef.decl = `missile_createAttractorEnt(<entity>, <strength>, <maxDist>)`;
funcDef.desc = `Creates a missile attractor at the origin of an entity.`;
funcDef.example = `attractor = missile_createAttractorEnt(enemyChopper, 10000, 6000);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missile_createAttractorOrigin`;
funcDef.decl = `missile_createAttractorOrigin(<origin>, <strength>, <maxDist>)`;
funcDef.desc = `Creates a missile attractor at the given location.`;
funcDef.example = `attractor = missile_createAttractorOrigin((100, 350, 10), 10000, 6000);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missile_createRepulsorEnt`;
funcDef.decl = `missile_createRepulsorEnt(<entity>, <strength>, <maxDist>)`;
funcDef.desc = `Creates a missile repulsor at the origin of an entity.`;
funcDef.example = `repulsor = missile_createRepulsorEnt(enemyChopper, 10000, 6000);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missile_createRepulsorOrigin`;
funcDef.decl = `missile_createRepulsorOrigin(<origin>, <strength>, <maxDist>)`;
funcDef.desc = `Creates a missile repulsor at the given location.`;
funcDef.example = `repulsor = missile_createRepulsorOrigin((100, 350, 10), 10000, 6000);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missile_deleteAttractor`;
funcDef.decl = `missile_deleteAttractor(<attractor>)`;
funcDef.desc = `Deletes a missle attractor or repulsor.`;
funcDef.example = `missile_deleteAttractor(attractor);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missile_setTarget`;
funcDef.decl = `<entity> missile_setTarget(<target entity>, <target offset>)`;
funcDef.desc = `Sets the target entity for a guided missile.`;
funcDef.example = `eMissile missile_setTarget(eTarget, (0, 0, -56));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missionFailed`;
funcDef.decl = `missionFailed()`;
funcDef.desc = `Does the same thing as the player being killed.`;
funcDef.example = `missionFailed();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `missionSuccess`;
funcDef.decl = `missionSuccess(<mapname>, <persistent>)`;
funcDef.desc = `Transitions to a new level via a mission success page.`;
funcDef.example = `missionSuccess("tankdrivetown", false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `moveGravity`;
funcDef.decl = `<entity> moveGravity(<initial velocity>, <time>)`;
funcDef.desc = `Fling this entity.`;
funcDef.example = `self moveGravity(breakVector, time);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `moveOverTime`;
funcDef.decl = `<hud> moveOverTime(<time>)`;
funcDef.desc = `Set a HUD element to move over time.`;
funcDef.example = `newStr moveOverTime(timer);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `moveTo`;
funcDef.decl = `<entity> moveTo(<point>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Move this entity to the given point.`;
funcDef.example = `dummy moveTo(destOrg, .5, .05, .05);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `moveX`;
funcDef.decl = `<entity> moveX(<units>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Move this entity to a position on the X-axis relative to its current position.`;
funcDef.example = `train moveX(-4400, 60, 15, 20);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `moveY`;
funcDef.decl = `<entity> moveY(<units>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Move this entity to a position on the Y-axis relative to its current position.`;
funcDef.example = `hangarDoor moveY(320, 10);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `moveZ`;
funcDef.decl = `<entity> moveZ(<units>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Move this entity to a position on the Z-axis relative to its current position.`;
funcDef.example = `gate moveZ(320, 5, .5, .5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `musicPlay`;
funcDef.decl = `musicPlay(<music>, <timescale>, <overrideCheat>)`;
funcDef.desc = `Play the given piece of music.`;
funcDef.example = `musicPlay("redsquare_dark", false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `musicStop`;
funcDef.decl = `musicStop(<time>, <overrideCheat>)`;
funcDef.desc = `Stop playing music.`;
funcDef.example = `musicStop(3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `newClientHudElem`;
funcDef.decl = `newClientHudElem(<client>)`;
funcDef.desc = `Create a new HUD element for a particular client.`;
funcDef.example = `self.kc_topBar = newClientHudElem(self);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `newHudElem`;
funcDef.decl = `newHudElem()`;
funcDef.desc = `Create a new HUD element.`;
funcDef.example = `overlay = newHudElem();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `newTeamHudElem`;
funcDef.decl = `newTeamHudElem(<team>)`;
funcDef.desc = `Create a new HUD element for a particular team.`;
funcDef.example = `level.progressbarAlliesNeutralize = newTeamHudElem("axis");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `nightVisionForceOff`;
funcDef.decl = `<player> nightVisionForceOff()`;
funcDef.desc = `Clears the player's nightvision state.`;
funcDef.example = `level.player nightVisionForceOff();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `notSolid`;
funcDef.decl = `<entity> notSolid()`;
funcDef.desc = `Unsets the solid flag, so that this object is no longer collidable.`;
funcDef.example = `self notSolid();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `notifyOnCommand`;
funcDef.decl = `<player> notifyOnCommand(<notify>, <command>)`;
funcDef.desc = `Whenever the console command processor encounters <command> for any reason, it will notify script with the string <notify> on the player entity. Additionally, it will pass the arguments to the notify as strings, where the first argument is the initiating command.`;
funcDef.example = `player notifyOnCommand("changeweapon", "weapnext");
player waittill("changeweapon");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `obituary`;
funcDef.decl = `obituary(<victim>, <attacker>, <weapon>, <means of death>)`;
funcDef.desc = `Create an obituary for a character.`;
funcDef.example = `obituary(self, attacker, sWeapon, sMeansOfDeath);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_add`;
funcDef.decl = `objective_add(<objective number>, <state>, <text>, <position>, <icon>)`;
funcDef.desc = `Adds a new objective.`;
funcDef.example = `objective_add(objectiveNumber, "active", objectiveText, (closest.bomb.origin));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_additionalCurrent`;
funcDef.decl = `objective_additionalCurrent(<objective index>...)`;
funcDef.desc = `Add additional objective(s) to the set of objectives currently being done. If none specified, there's no effect. Current objectives that are not specified are not affected by this call. Meant to be used when there are already current objective(s), but one or more additional objectives need to be made current in addition to the previously current objectives.`;
funcDef.example = `objective_additionalCurrent(level.flakObjectiveID);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_additionalPosition`;
funcDef.decl = `objective_additionalPosition(<objective index>, <position index>, <position>)`;
funcDef.desc = `Set an additional position for objectives with multiple positions.`;
funcDef.example = `objective_additionalPosition(level.mortarObjNumber, ent.index, nMortarCarrier.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_current`;
funcDef.decl = `objective_current(<objective index>...)`;
funcDef.desc = `Set which objective(s) are currently being done. If none specified, there's no current objective. Current objectives that are not specified to still be current, are set to active.`;
funcDef.example = `objective_current(aHardpointObjectives[0].obj, aHardpointObjectives[1].obj, aHardpointObjectives[2].obj);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_delete`;
funcDef.decl = `objective_delete(<objective number>)`;
funcDef.desc = `Removes an objective`;
funcDef.example = `objective_delete(1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_icon`;
funcDef.decl = `objective_icon(<objective number>, <icon>)`;
funcDef.desc = `Set the compass icon for an objective.`;
funcDef.example = `objective_icon(0, game["radio_none"]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_onEntity`;
funcDef.decl = `objective_onEntity(<objective number>, <entity>)`;
funcDef.desc = `Sets the objective to get its position from an entity.`;
funcDef.example = `objective_onEntity(0, ent);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_position`;
funcDef.decl = `objective_position(<objective number>, <position>)`;
funcDef.desc = `Set the position of an objective, assumed to be the zeroth position, must use objective_additionalPosition to set a different position index.`;
funcDef.example = `objective_position(4, getObjectivePosition("plant_boilerbomb_trigger"));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_ring`;
funcDef.decl = `objective_ring(<objective index>)`;
funcDef.desc = `Triggers a ring on the objective.`;
funcDef.example = `objective_ring(level.moratorObjNumber);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_state`;
funcDef.decl = `objective_state(<objective number>, <state>)`;
funcDef.desc = `Sets the state of an objective.`;
funcDef.example = `objective_state(8, "done");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_string`;
funcDef.decl = `objective_string(<objective number>, <string>...)`;
funcDef.desc = `Set the description string for an objective.`;
funcDef.example = `objective_string(index, &"SCRIPT_OBJ_DESTROYFLAKPANZERS", level.flaksRemaining);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_string_noMessage`;
funcDef.decl = `objective_string_noMessage(<objective number>, <string>...)`;
funcDef.desc = `Set the description string for an objective, without posting an "objectives updated" message.`;
funcDef.example = `objective_string_noMessage(index, &"SCRIPT_OBJ_DESTROYFLAKPANZERS", level.flaksRemaining);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `objective_team`;
funcDef.decl = `objective_team(<objective number>, <team>...)`;
funcDef.desc = `Sets the team that the objective is for. Allows having different objectives for each team.`;
funcDef.example = `objective_team(0, "allies");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `openFile`;
funcDef.decl = `openFile(<filename>, <mode>)`;
funcDef.desc = `Open a file for reading, writing or appending. If successful returns a file handle, otherwise returns -1.`;
funcDef.example = `file = openFile("data.csv", "read");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `openMenu`;
funcDef.decl = `<player> openMenu(<menu>)`;
funcDef.desc = `Open a menu for this player.`;
funcDef.example = `self openMenu(game["menu_weapon_allies_only"]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `openMenuNoMouse`;
funcDef.decl = `<player> openMenuNoMouse(<menu>)`;
funcDef.desc = `Open a menu for this player, with no mouse control.`;
funcDef.example = `self openMenuNoMouse(game["menu_weapon_allies_only"]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `physicsExplosionCylinder`;
funcDef.decl = `physicsExplosionCylinder(<center>, <outer radius>, <inner radius>, <magnitude>)`;
funcDef.desc = `Imparts a 1-frame impulse on physics objects radially outward in a cylinder (i.e., all the added forces are parallel to the ground). This can be used to simulate wind from a helicopter.`;
funcDef.example = `physicsExplosionCylinder(origin, 50, 40, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `physicsExplosionSphere`;
funcDef.decl = `physicsExplosionSphere(<center>, <outer radius>, <inner radius>, <magnitude>)`;
funcDef.desc = `Imparts a 1-frame explosion impulse on physics objects, similar to a grenade.`;
funcDef.example = `physicsExplosionSphere(origin, 50, 40, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `physicsJitter`;
funcDef.decl = `physicsJitter(<center>, <outer radius>, <inner radius>, <min displacement>, <max displacement>)`;
funcDef.desc = `Jitters physics objects touching the ground. Jitter forces are calculated in such a way as to displace the object upwards some height between min and max displacement at each point of contact with the ground.`;
funcDef.example = `physicsJitter(origin, 200, 150, 1.0, 5.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `physicsJolt`;
funcDef.decl = `physicsJolt(<center>, <outer radius>, <inner radius>, <force>)`;
funcDef.desc = `Imparts a 1-frame randomly-jittered impulse on physics objects in a radius.`;
funcDef.example = `physicsJolt(origin, 200, 150, (0.01, 0.01, 0.2));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `physicsLaunch`;
funcDef.decl = `<entity> physicsLaunch(<contactPoint>, <initialForce>)`;
funcDef.desc = `Permanently turn this entity into a physics object with an initial force vector at the specified point.`;
funcDef.example = `dummy physicsLaunch(contactPoint, initialForce);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `physicsTrace`;
funcDef.decl = `physicsTrace(<start>, <end>, <hit characters>, <ignore entity>)`;
funcDef.desc = `Physics trace, ignoring characters. Returns the end position vector`;
funcDef.example = `endPos = physicsTrace(start, end);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `pingPlayer`;
funcDef.decl = `<player> pingPlayer()`;
funcDef.desc = `Flashes a player on their teammate's compasses.`;
funcDef.example = `self pingPlayer();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `placeSpawnPoint`;
funcDef.decl = `<entity> placeSpawnPoint()`;
funcDef.desc = `Raises the spawn point up to make sure it's not in the ground, then drops it back down into the ground.`;
funcDef.example = `spawnpoints[i] placeSpawnPoint();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playFX`;
funcDef.decl = `playFX(<effect id >, <position of effect>, <forward vector>, <up vector>)`;
funcDef.desc = `Play this effect.`;
funcDef.example = `playFX(enginesmoke, engine.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playFXOnTag`;
funcDef.decl = `playFXOnTag(<effect id >, <entity>, <tag name>)`;
funcDef.desc = `Play this effect on the entity and tag.`;
funcDef.example = `playFXOnTag(id, ent, tag);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playLocalSound`;
funcDef.decl = `<player> playLocalSound(<sound>, <notification string>, <stoppable flag>)`;
funcDef.desc = `Plays a sound locally to the player.`;
funcDef.example = `players[i] playLocalSound("MP_announcer_round_draw");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playLoopSound`;
funcDef.decl = `<entity> playLoopSound(<alias>)`;
funcDef.desc = `Play a sound as a loop.`;
funcDef.example = `car playLoopSound("peugeot_idle_low");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playLoopedFX`;
funcDef.decl = `playLoopedFX(<effect id>, <repeat delay>, <position>, <cull distance>, <forward>, <up>)`;
funcDef.desc = `Play this effect on the entity and tag.`;
funcDef.example = `playLoopedFX(id, delay, position);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playRumbleLoopOnEntity`;
funcDef.decl = `<entity> playRumbleLoopOnEntity(<rumble>)`;
funcDef.desc = `Plays a looping rumble on the given entity.`;
funcDef.example = `self playRumbleLoopOnEntity("tank_rumble");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playRumbleLoopOnPosition`;
funcDef.decl = `playRumbleLoopOnPosition(<rumble>, <position>)`;
funcDef.desc = `Plays a looping rumble at a given position.`;
funcDef.example = `playRumbleLoopOnPosition("artillery_quake", level.player.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playRumbleOnEntity`;
funcDef.decl = `<entity> playRumbleOnEntity(<rumble>)`;
funcDef.desc = `Plays a rumble on the given entity.`;
funcDef.example = `self playRumbleOnEntity("damage_heavy");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playRumbleOnPosition`;
funcDef.decl = `playRumbleOnPosition(<rumble>, <position>)`;
funcDef.desc = `Plays a rumble at a given position.`;
funcDef.example = `playRumbleOnPosition("artillery_quake", level.player.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playSound`;
funcDef.decl = `<entity> playSound(<alias>, <notification>, <stoppable>)`;
funcDef.desc = `Play the sound alias as if coming from the entity.`;
funcDef.example = `self playSound("dirt_skid", "skidsound", true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playSoundAsMaster`;
funcDef.decl = `<entity> playSoundAsMaster(<alias>, <notification>, <stoppable>)`;
funcDef.desc = `Play the sound alias as if coming from the entity, as a master sound.`;
funcDef.example = `self playSoundAsMaster("dirt_skid", "skidsound", true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playSoundToPlayer`;
funcDef.decl = `<entity> playSoundToPlayer(<alias>, <player>)`;
funcDef.desc = `Play the sound alias as if coming from the entity, as a master sound.`;
funcDef.example = `self playSoundToPlayer("frag_out", self);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playSoundToTeam`;
funcDef.decl = `<entity> playSoundToTeam(<alias>, <team>, <ignoreplayer>)`;
funcDef.desc = `Play the sound alias as if coming from the entity, as a master sound.`;
funcDef.example = `self playSoundToTeam("frag_out", "axis", self);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playerAds`;
funcDef.decl = `<player> playerAds()`;
funcDef.desc = `Return the player's weapon position fraction.`;
funcDef.example = `while (self playerAds() > 0.3) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playerLinkTo`;
funcDef.decl = `playerLinkTo(<entity>, <tag>, <viewpercentage fraction>, <right arc>, <left arc>, <top arc>, <bottom arc>, <collide>)`;
funcDef.desc = `Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. Rotating the parent entity/tag will not move the player's eye position, but only the player's view angles. Thus, the player's eye position is locked in place, always directly above the parent tag.`;
funcDef.example = `level.player playerLinkTo(vehicle, "tag_player", 0.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playerLinkToAbsolute`;
funcDef.decl = `playerLinkToAbsolute(<entity>, <tag>)`;
funcDef.desc = `Attaches the player to an entity. No view movement is allowed. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical).`;
funcDef.example = `level.player playerLinkToAbsolute(vehicle, "tag_player");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playerLinkToDelta`;
funcDef.decl = `playerLinkToDelta(<entity>, <tag>, <viewpercentage fraction>, <right arc>, <left arc>, <top arc>, <bottom arc>, <use tag angles>)`;
funcDef.desc = `Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical).`;
funcDef.example = `level.player playerLinkToDelta(vehicle, "tag_player", 0.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playerPhysicsTrace`;
funcDef.decl = `playerPhysicsTrace(<start>, <end>, <hit characters>, <ignore entity>)`;
funcDef.desc = `Physics trace using player capsule size, ignoring characters. Returns the end position vector`;
funcDef.example = `endPos = playerPhysicsTrace(start, end);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `playerSetGroundReferenceEnt`;
funcDef.decl = `<player> playerSetGroundReferenceEnt(<entity>)`;
funcDef.desc = `The ground entity's rotation will be added onto the player's view. In particular, this will cause the player's yaw to rotate around the entity's z-axis instead of the world z-axis. You only need to call this function once. After that, any rotation that the reference entity undergoes will affect the player. Call this command again with undefined to turn it off.`;
funcDef.example = `level.player playerSetGroundReferenceEnt(seaEnt);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `pointOnSegmentNearestToPoint`;
funcDef.decl = `pointOnSegmentNearestToPoint(<segment A>, <segment B>, <P>)`;
funcDef.desc = `Given a line segment and a point P, this returns the point on the segment that is closest to P. Note: This function will return A or B if P is beyond these two points.`;
funcDef.example = `nearestPoint = pointOnSegmentNearestToPoint(a, b, p);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `positionWouldTelefrag`;
funcDef.decl = `positionWouldTelefrag(<position>)`;
funcDef.desc = `Returns true if the passed in origin would telefrag a player if another played was spawned there.`;
funcDef.example = `if (positionWouldTelefrag(spawnpoints[i].origin)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheHeadIcon`;
funcDef.decl = `precacheHeadIcon(<name>)`;
funcDef.desc = `Precache a head icon.`;
funcDef.example = `preCacheHeadIcon(game["headicon_allies"]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheItem`;
funcDef.decl = `precacheHeadIcon(<name>)`;
funcDef.desc = `Precaches the given item. It must be called before any wait statements in the level script.`;
funcDef.example = `preCacheItem("m40a3_mp");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheLocationSelector`;
funcDef.decl = `preCacheLocationSelector(<name>)`;
funcDef.desc = `Precaches a material to be used as an indicator during location selection on the map.`;
funcDef.example = `preCacheLocationSelector("map_crosshair");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheMenu`;
funcDef.decl = `preCacheMenu(<name>)`;
funcDef.desc = `Precaches a menu.`;
funcDef.example = `preCacheMenu(game["menu_serverinfo"]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheModel`;
funcDef.decl = `preCacheModel(<name>)`;
funcDef.desc = `Precaches the given model. It must be called before any wait statements in the level script.`;
funcDef.example = `preCacheModel("prop_panzerfaust_lid");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheNightvisionCodeAssets`;
funcDef.decl = `preCacheNightvisionCodeAssets()`;
funcDef.desc = `Precaches assets needed by code for the Nightvision features.`;
funcDef.example = `preCacheNightvisionCodeAssets();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheRumble`;
funcDef.decl = `preCacheRumble(<name>)`;
funcDef.desc = `Precaches the given rumble. It must be called before any wait statements in the level script.`;
funcDef.example = `preCacheRumble("damage_heavy");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheShader`;
funcDef.decl = `preCacheShader(<name>)`;
funcDef.desc = `Precaches the given shader. It must be called before any wait statements in the level script.`;
funcDef.example = `preCacheShader("artillery_firing");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheShellShock`;
funcDef.decl = `preCacheShellShock(<name>)`;
funcDef.desc = `Precaches the given shell shock effect. It must be called before any wait statements in the level script.`;
funcDef.example = `preCacheShellShock("ac130");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheStatusIcon`;
funcDef.decl = `preCacheStatusIcon(<name>)`;
funcDef.desc = `Precaches the given status icon.`;
funcDef.example = `preCacheStatusIcon("hud_status_dead");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheString`;
funcDef.decl = `preCacheString(<name>)`;
funcDef.desc = `Precaches the given string. It must be called before any wait statements in the level script.`;
funcDef.example = `preCacheString(&"MP_INTERMISSION");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheTurret`;
funcDef.decl = `preCacheTurret(<name>)`;
funcDef.desc = `Precaches the weapon info structure for the turret. It must be called before any wait statements in the level script.`;
funcDef.example = `preCacheTurret("mg42_tank_tiger");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `preCacheVehicle`;
funcDef.decl = `preCacheVehicle(<name>)`;
funcDef.desc = `Precaches the weapon info structure for the turret on the vehicle. It must be called before any wait statements in the level script.`;
funcDef.example = `node = preCacheVehicle("mg42_tank_tiger");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `print`;
funcDef.decl = `print(<text>)`;
funcDef.desc = `Development only - write to the console.`;
funcDef.example = `print("Stuff and things!");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `print3D`;
funcDef.decl = `print3D(<origin>, <text>, <color>, <alpha>, <scale>, <duration>)`;
funcDef.desc = `Development only - write to the console.`;
funcDef.example = `print3d(start, "START', (1.0, 0.8, 0.5), 1, 3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `printLn`;
funcDef.decl = `printLn(<text>)`;
funcDef.desc = `Development only - write line to the console.`;
funcDef.example = `printLn("I could be doing better!");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `radiusDamage`;
funcDef.decl = `radiusDamage(<origin>, <range>, <max damage>, <min damage>, <attacker>)`;
funcDef.desc = `Does damage to all damageable objects within a given radius. The amount of damage is linear according to how close the object is to the radius. See also Entity/radiusdamage to specify an entity the damage is coming from.`;
funcDef.example = `radiusDamage(level.player.origin, 500, max, min, attacker);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `randomFloat`;
funcDef.decl = `randomFloat(<max>)`;
funcDef.desc = `Returns a random floating point number r, where 0 <= r < max.`;
funcDef.example = `if (randomFloat(100) > 50) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `randomFloatRange`;
funcDef.decl = `randomFloatRange(<min>, <max>)`;
funcDef.desc = `Returns a random floating point number r, where min <= r < max.`;
funcDef.example = `rand = randomFloatRange(3.0, 5.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `randomInt`;
funcDef.decl = `randomInt(<max>)`;
funcDef.desc = `Returns a random integer between 0 and max-1 inclusive.`;
funcDef.example = `if (randomInt(100) > 50) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `randomIntRange`;
funcDef.decl = `randomIntRange(<min>, <max>)`;
funcDef.desc = `Returns a random integer r, where min <= r < max.`;
funcDef.example = `rand = randomIntRange(3.0, 5.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `refreshHudAmmoCounter`;
funcDef.decl = `refreshHudAmmoCounter()`;
funcDef.desc = `Causes the HUD ammo counter and actionslots to show, as if the player had fired or otherwise caused it to show. Will fade out as normal.`;
funcDef.example = `refreshHudAmmoCounter();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `refreshHudCompass`;
funcDef.decl = `refreshHudCompass()`;
funcDef.desc = `Causes the HUD compass to show, as if the player had moved or otherwise caused it to show. Will fade out as normal.`;
funcDef.example = `refreshHudCompass();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `releaseClaimedTrigger`;
funcDef.decl = `<entity> releaseClaimedTrigger()`;
funcDef.desc = `Release a currently claimed trigger.`;
funcDef.example = `trigger releaseClaimedTrigger();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `removeAIEventListener`;
funcDef.decl = `<entity> removeAIEventListener(<event>)`;
funcDef.desc = `Remove an entity from listening to an AI event.`;
funcDef.example = `self removeAIEventListener();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `removeVehicleFromCompass`;
funcDef.decl = `<entity> removeVehicleFromCompass()`;
funcDef.desc = `Removes this vehicle from the compass.`;
funcDef.example = `helicopter removeVehicleFromCompass();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `reset`;
funcDef.decl = `<hud> reset()`;
funcDef.desc = `Reset a HUD element to its default state.`;
funcDef.example = `element reset();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `resetSpreadOverride`;
funcDef.decl = `<player> resetSpreadOverride()`;
funcDef.desc = `Resets the player spread value to the ones of the weapon in use.`;
funcDef.example = `level.player resetSpreadOverride();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `resetSunDirection`;
funcDef.decl = `resetSunDirection()`;
funcDef.desc = `Restores the map's default sun direction values.`;
funcDef.example = `resetSunDirection();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `resetSunLight`;
funcDef.decl = `resetSunLight()`;
funcDef.desc = `Restores the map's default sunlight values.`;
funcDef.example = `resetSunLight();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `resetTimeout`;
funcDef.decl = `resetTimeout()`;
funcDef.desc = `Resets the infinite loop check timer, to prevent an incorrect infinite loop error when a lot of script must be run.`;
funcDef.example = `resetTimeout();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `restoreDefaultDropPitch`;
funcDef.decl = `<entity> restoreDefaultDropPitch()`;
funcDef.desc = `Restores the pitch of the turret when it drops to the ground. Recalculates based on current collision environement. Use this if you move a turret and need to reconfigure.`;
funcDef.example = `turret restoreDefaultDropPitch();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `resumeSpeed`;
funcDef.decl = `<entity> resumeSpeed(<acceleration>)`;
funcDef.desc = `Sets the vehicle to resume its path speed.`;
funcDef.example = `level.tank resumeSpeed(3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `returnPlayerControl`;
funcDef.decl = `<entity> returnPlayerControl()`;
funcDef.desc = `After controlling a vehicle from script using something like setVehGoalPos(), if the vehicle is being driven by a player, you call this function to return control of the vehicle to the player.`;
funcDef.example = `cobra returnPlayerControl();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `rotatePitch`;
funcDef.decl = `<entity> rotatePitch(<pitch angle>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Rotate this entity to the given pitch relative to its starting angles.`;
funcDef.example = `treeOrg rotatePitch(-5, 0.26, 0.15, 0.1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `rotateRoll`;
funcDef.decl = `<entity> rotateRoll(<roll angle>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Rotate this entity to the given roll relative to its starting angles.`;
funcDef.example = `self rotateRoll((2 * 1500 + 3 * randomFloat(2500)) * -1, 5, 0, 0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `rotateTo`;
funcDef.decl = `<entity> rotateTo(<angles>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Rotate this entity to the given world angles.`;
funcDef.example = `shutter rotateTo((shutter.angles[0], newYaw, shutter.anlges[2]), newTime);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `rotateVelocity`;
funcDef.decl = `<entity> rotateVelocity(<rotate velocity>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Rotate this entity at a particular velocity for a given time.`;
funcDef.example = `self rotateVelocity((x, y, z), 12);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `rotateYaw`;
funcDef.decl = `<entity> rotateYaw(<yaw angle>, <time>, <acceleration time>, <deceleration time>)`;
funcDef.desc = `Rotate this entity to the given yaw relative to its starting angles.`;
funcDef.example = `ent rotateYaw(60, 4, .5, .5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `saveGame`;
funcDef.decl = `saveGame(<filename>, <description>, <screenshot>, <supressPlayerNotify>)`;
funcDef.desc = `Save the current game. Will throw a script error if multiple saves are attempted in the same frame.`;
funcDef.example = `saveGame("Chateau" + nodeNum, "Documents Obtained");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `saveGameNoCommit`;
funcDef.decl = `saveGameNoCommit(<filename>, <description>, <screenshot>, <supressPlayerNotify>)`;
funcDef.desc = `Save the current game to a memory buffer. Returns an ID for the save. Will throw a script error if multiple saves are attempted in the same frame.`;
funcDef.example = `id = saveGameNoCommit("Chateau" + nodeNum, "Documents Obtained");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `sayAll`;
funcDef.decl = `<player> sayAll(<message>)`;
funcDef.desc = `Write a client chat message from this client to everybody.`;
funcDef.example = `self sayAll(saytext);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `sayTeam`;
funcDef.decl = `<player> sayTeam(<message>)`;
funcDef.desc = `Write a client chat message from this client to everybody on their team.`;
funcDef.example = `self sayTeam(saytext);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `scaleOverTime`;
funcDef.decl = `<hud> scaleOverTime(<time>, <width>, <height>)`;
funcDef.desc = `Set a HUD element to scale over time.`;
funcDef.example = `other.progressbar scaleOverTime(level.plantTime, level.barSize, 8);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `secondaryOffhandButtonPressed`;
funcDef.decl = `<player> secondaryOffhandButtonPressed()`;
funcDef.desc = `Check if the player is pressing the "secondary off-hand" button.`;
funcDef.example = `if (self secondaryOffhandButtonPressed()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAISpread`;
funcDef.decl = `<entity> setAISpread(<spread>)`;
funcDef.desc = `Sets the spread of this turret when used by an AI.`;
funcDef.example = `roofMg42 setAISpread(0.2);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAcceleration`;
funcDef.decl = `<entity> setAcceleration(<acceleration>)`;
funcDef.desc = `Sets the acceleration for this vehicle.`;
funcDef.example = `self setAcceleration(15);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setActionSlot`;
funcDef.decl = `<player> setActionSlot(<slot>, <option name>, <extra parameter>)`;
funcDef.desc = `Sets the option to perform when the player executes (for example) "+actionslot 1".`;
funcDef.example = `level.player setActionSlot(1, "altmode"); // Switch between attached m203 grenade laucnher, if available
level.player setActionSlot(2, "nightvision"); // Toggle nightvision on and off
level.player setActionSlot(4, "weapon", "c4");
level.player setActionSlot(3, "");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAirResistance`;
funcDef.decl = `<entity> setAirResistance(<max air resistance speed>)`;
funcDef.desc = `Sets the speed at which air resistance maxes out. Note: Air resistance ramps up exponentially up to this speed. Set it to a high value to flatten helicopter when it is done accelerating to move at the desired speed.`;
funcDef.example = `self setAirResistance(60);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnim`;
funcDef.decl = `<entity> setAnim(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `<p>SetAnim and all of its variants set the weight of an animation (or a node in the animtree) to a given value over a given time. They also set the speed at which the animation plays. All of the ancestors of the animation will also have their weight set to 1 over the given time so that the animation is visible. Each variant of this function has different behavior depending on the words in the function name:</p><p>"Flagged": These functions take an additional argument <notifyname> (first in the argument list) which is a string that is notified for every notetrack in the animation. For instance, if the string "runanim" is used, it would be typical to waittill("runanim", "end") to wait for the end of the animation. <animation> must be an actual animation and not a non-leaf node of the animtree.</p><p>"Knob": These functions turn the weight of any siblings of the animation to zero as the animation's weight is turned up. The effect is that after the given time, the animation is the only one out of its siblings that is playing. Note that the descendents of the siblings of the animation will not be turned off directly. (For this, use ClearAnim.)</p><p>"All": Works only with "Knob." Not available with both "Limited" and "Flagged" at the same time. These functions take an additional argument <root> (after the animation argument). <root> must be an ancestor of <animation> in the tree. This has the additional effect that "Knob" has on all nodes from the animation up to (but not including) <root>, so that this animation is the only one in its area of the tree which is playing.</p><p>"Limited": These functions do not change the goal weight of the ancestors of <animation> (If "KnobAll" is used, this means the ancestors of <root>). This means that the animation might not be visible if any of its ancestors currently have a weight of 0. However, when its ancestors' weight is changed, it will become visible.</p><p>"Restart": These functions cause the animation to restart. If they had been previously playing, without this they would continue from their current time.</p>`;
funcDef.example = `self setAnim(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnob`;
funcDef.decl = `<entity> setAnimKnob(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnob(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnobAll`;
funcDef.decl = `<entity> setAnimKnobAll(<animation>, <root>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnobAll(%precombatrun1, %body, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnobAllLimited`;
funcDef.decl = `<entity> setAnimKnobAllLimited(<animation>, <root>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnobAllLimited(%precombatrun1, %body, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnobAllLimitedRestart`;
funcDef.decl = `<entity> setAnimKnobAllLimitedRestart(<animation>, <root>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnobAllLimitedRestart(%precombatrun1, %body, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnobAllRestart`;
funcDef.decl = `<entity> setAnimKnobAllRestart(<animation>, <root>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnobAllRestart(%precombatrun1, %body, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnobLimited`;
funcDef.decl = `<entity> setAnimKnobLimited(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnobLimited(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnobLimitedRestart`;
funcDef.decl = `<entity> setAnimKnobLimitedRestart(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnobLimitedRestart(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimKnobRestart`;
funcDef.decl = `<entity> setAnimKnobRestart(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimKnobRestart(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimLimited`;
funcDef.decl = `<entity> setAnimLimited(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimLimited(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimLimitedRestart`;
funcDef.decl = `<entity> setAnimLimitedRestart(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimLimitedRestart(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimRestart`;
funcDef.decl = `<entity> setAnimRestart(<animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setAnimRestart(%precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAnimTime`;
funcDef.decl = `<entity> setAnimTime(<animation>, <time>)`;
funcDef.desc = `Set the time of an animation.`;
funcDef.example = `self setAnimTime(%stand_aim, 0.3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setArchive`;
funcDef.decl = `setArchive(<archive>)`;
funcDef.desc = `Sets whether or not to enable archiving. (Deprecated, does nothing.)`;
funcDef.example = `setArchive(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setAutoPickup`;
funcDef.decl = `<player> setAutoPickup(<enabled>)`;
funcDef.desc = `Sets whether the player will automatically pick up pickups.`;
funcDef.example = `level.player setAutoPickup(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setBlur`;
funcDef.decl = `setBlur(<target_blur>, <time>)`;
funcDef.desc = `Blur the screen over a period of time.`;
funcDef.example = `setBlur(10.3, 3.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setBottomArc`;
funcDef.decl = `<entity> setBottomArc(<angle>)`;
funcDef.desc = `Set the amount that the turret can pivot down.`;
funcDef.example = `mg42 setBottomArc(45);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setCanDamage`;
funcDef.decl = `<entity> setCanDamage(<can damage>)`;
funcDef.desc = `Set the candamage flag for this entity - this means that it can respond to notifies from bullets and grenade hits.`;
funcDef.example = `self setCanDamage(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setChannelVolumes`;
funcDef.decl = `<player> setChannelVolumes(<priority>, <shock name>, <fade time>)`;
funcDef.desc = `Set the channel volumes for the player (a way of fading volumes by type).`;
funcDef.example = `level.player setChannelVolumes("snd_channelvolprio_pain", "pain", 3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setClientDvar`;
funcDef.decl = `<player> setClientDvar(<dvar>, <value>)`;
funcDef.desc = `Set the value of a dvar which is specific to each client.`;
funcDef.example = `self setClientDvar("cg_drawhud", "0");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setClientDvars`;
funcDef.decl = `<player> setClientDvars(<dvar>, <value>, <dvar>, <value>...)`;
funcDef.desc = `Set the values of a list of dvars which are specific to each client.`;
funcDef.example = `self setClientDvars("cg_drawhud", "0", "cg_draw2d", "0");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setClientNameMode`;
funcDef.decl = `setClientNameMode(<name mode>)`;
funcDef.desc = `Alters the way that the player name is updated, to prevent cheating by spectators altering their name to communicate with active players.`;
funcDef.example = `setClientNameMode("auto_change");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setClock`;
funcDef.decl = `<hud> setClock(<time>, <full time>, <material>, <width>, <height>)`;
funcDef.desc = `Set a clock HUD element to count down over a time period.`;
funcDef.example = `level.bombStopwatch setClock(5, 60, "hudStopwatch", 64, 64);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setClockUp`;
funcDef.decl = `<hud> setClockUp(<time>, <full time>, <material>, <width>, <height>)`;
funcDef.desc = `Set a clock HUD element to count up over a time period.`;
funcDef.example = `level.bombStopwatch setClockUp(5, 60, "hudStopwatch", 64, 64);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setContents`;
funcDef.decl = `<entity> setContents(<contents>)`;
funcDef.desc = `Sets the contents of an entity. Returns the old contents.`;
funcDef.example = `level.solid setContents(1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setConvergenceTime`;
funcDef.decl = `<entity> setConvergenceTime(<convergence time>, <type>)`;
funcDef.desc = `Sets the time that a turret takes to converge to its target, on either the pitch or yay planes.`;
funcDef.example = `roofMg42 setConvergenceTime(2.0, "yaw");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setCullDist`;
funcDef.decl = `setCullDist(<cull distance>)`;
funcDef.desc = `Set the cull distance for a level.`;
funcDef.example = `setCullDist(7200);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setCursorHint`;
funcDef.decl = `<entity> setCursorHint(<hint>)`;
funcDef.desc = `Sets a visible cursor near to an objective.`;
funcDef.example = `trigger setCursorHint("HINT_NOICON");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setDebugAngles`;
funcDef.decl = `setDebugAngles(<angles>)`;
funcDef.desc = `Set the debugging angles for a debug camera.`;
funcDef.example = `setDebugAngles(camera.angles);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setDebugOrigin`;
funcDef.decl = `setDebugOrigin(<origin>)`;
funcDef.desc = `Set the debugging origin for a debug camera.`;
funcDef.example = `setDebugOrigin(camera.origin + (0,0,-60));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setDeceleration`;
funcDef.decl = `<entity> setDeceleration(<deceleration>)`;
funcDef.desc = `Sets the deceleration for this vehicle.`;
funcDef.example = `self setDeceleration(5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setDefaultDropPitch`;
funcDef.decl = `<entity> setDefaultDropPitch(<pitch>)`;
funcDef.desc = `Set the default drop pitch that the turret attempts to return to when it is not in use.`;
funcDef.example = `turret setDefaultDropPitch(-90);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setDepthOfField`;
funcDef.decl = `<player> setDepthOfField(<near start>, <near end>, <far start>, <far end>, <near blur>, <far blur>)`;
funcDef.desc = `Set the depth of field values for a player. If start >= end for near or far, depth of field is disabled for that region.`;
funcDef.example = `self setDepthOfField(10, 80, 1000, 7000, 5, 1.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setDvar`;
funcDef.decl = `setDvar(<dvar>, <value>)`;
funcDef.desc = `Sets the value of a script dvar. Can not set code dvars. Script dvars are not preserved in savegames.`;
funcDef.example = `setDvar("r_eyesAdjust", "1");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setEngineVolume`;
funcDef.decl = `<entity> setEngineVolume(<scale>)`;
funcDef.desc = `Scales the volume of engine sound for this vehicle. This is useful for ramping up sounds of newly spawned vehicles.`;
funcDef.example = `helicopter setEngineVolume(0.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setEq`;
funcDef.decl = `<player> setEq(<channel>, <eqIndex>, <band>, <filter type>, <gain>, <frequency>, <q>)`;
funcDef.desc = `Set a parametric filter for the player on a specified channel.`;
funcDef.example = `level.player setEq("ambient", 0, "bell", 3, 1000, 2.1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setEqLerp`;
funcDef.decl = `<player> setEqLerp(<eqLerp>, <eqIndex>)`;
funcDef.desc = `Set the blend amount for the specified eqIndex, for eqIndex 0 if none is specified. Automatically sets the blend amount of the other eqIndex to 1-eqLerp.`;
funcDef.example = `level.player setEqLerp(0.25, 1); // Now using 25% of EQ 1 and 75% of EQ 0`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setExpFog`;
funcDef.decl = `setExpFog(<startDist>, <halfwayDist>, <red>, <green>, <blue>, <transition time>)`;
funcDef.desc = `Creates an exponential fog.`;
funcDef.example = `setExpFog(0.0001144, 131/255, 116/255, 71/255, 0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnim`;
funcDef.decl = `<entity> setFlaggedAnim(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnim("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimKnob`;
funcDef.decl = `<entity> setFlaggedAnimKnob(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimKnob("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimKnobAll`;
funcDef.decl = `<entity> setFlaggedAnimKnob(<notifyname>, <animation>, <root>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimKnob("runanim", %precombatrun1, %body, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimKnobAllRestart`;
funcDef.decl = `<entity> setFlaggedAnimKnobAllRestart(<notifyname>, <animation>, <root>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimKnobAllRestart("runanim", %precombatrun1, %body, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimKnobLimited`;
funcDef.decl = `<entity> setFlaggedAnimKnobLimited(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimKnobLimited("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimKnobLimitedRestart`;
funcDef.decl = `<entity> setFlaggedAnimKnobLimitedRestart(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimKnobLimitedRestart("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimKnobRestart`;
funcDef.decl = `<entity> setFlaggedAnimKnobRestart(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimKnobRestart("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimLimited`;
funcDef.decl = `<entity> setFlaggedAnimLimited(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimLimited("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimLimitedRestart`;
funcDef.decl = `<entity> setFlaggedAnimLimitedRestart(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimLimitedRestart("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setFlaggedAnimRestart`;
funcDef.decl = `<entity> setFlaggedAnimRestart(<notifyname>, <animation>, <weight>, <time>, <rate>)`;
funcDef.desc = `See "setAnim".`;
funcDef.example = `self setFlaggedAnimRestart("runanim", %precombatrun1, 1, 0.1, 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setGameEndTime`;
funcDef.decl = `setGameEndTime(<time>)`;
funcDef.desc = `Sets the time the current match will end.`;
funcDef.example = `setGameEndTime(getTime() + 100000);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setGameTypeString`;
funcDef.decl = `<hud> setGameTypeString(<game type>)`;
funcDef.desc = `Set the game type string for the game.`;
funcDef.example = `hud setGameTypeString("Search & Destroy");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setGoalYaw`;
funcDef.decl = `<entity> setGoalYaw(<yaw>)`;
funcDef.desc = `Set the goal yaw direction for this vehicle. Goal yaw is ignored if vehicle doesn't stop at goal. Lookat entity has priority over goal yaw.`;
funcDef.example = `self setGoalYaw(node.angles[1]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setHintString`;
funcDef.decl = `<entity> setHintString(<string>)`;
funcDef.desc = `Sets the thing string for a usable entity.`;
funcDef.example = `fuelLever setHintString(&"ROCKET_FUEL_LEVER");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setHoverParams`;
funcDef.decl = `<entity> setHoverParams(<radius>, <speed>, <accel>)`;
funcDef.desc = `Set the hovering parameters.`;
funcDef.example = `self setHoverParams(50, 1, 0.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setIgnoreMeGroup`;
funcDef.decl = `setIgnoreMeGroup(<ignored group>, <ignoring group>)`;
funcDef.desc = `Make first group ignored by second group.`;
funcDef.example = `setIgnoreMeGroup("flanking_team", "axis");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setJitterParams`;
funcDef.decl = `<entity> setJitterParams(<range vector>, <min period>, <max period>)`;
funcDef.desc = `Set the jitter parameters. Set everything to 0 to stop jittering. Vehicle ignores jitter parameters when on ground. Note: For player helicopters, the jitter params are used for jittering the pitch and roll of the helicopter.`;
funcDef.example = `self setJitterParams((0, 0, 20), 0.5, 1.5); // Jitter up or down randomly within 20 units, switching every 0.5 to 1.5 seconds`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLeftArc`;
funcDef.decl = `<entity> setLeftArc(<angle>)`;
funcDef.desc = `Set the amount that the turret can move to the left.`;
funcDef.example = `mg42 setLeftArc(45);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLightColor`;
funcDef.decl = `<entity> setLightColor(<color>)`;
funcDef.desc = `Sets the current color of the light, as an RGB vector.`;
funcDef.example = `self setLightColor((0.5, 0.75, 1.0));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLightExponent`;
funcDef.decl = `<entity> setLightExponent(<exponent>)`;
funcDef.desc = `Sets the current exponent of the light.`;
funcDef.example = `self setLightExponent(1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLightFovRange`;
funcDef.decl = `<entity> setLightFovRange(<fov outer>, <fov inner>)`;
funcDef.desc = `Sets the current radius of the light.`;
funcDef.example = `self setLightFovRange(outer, inner);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLightIntensity`;
funcDef.decl = `<entity> setLightIntensity(<intensity>)`;
funcDef.desc = `Sets the current intensity of the light.`;
funcDef.example = `self setLightIntensity(1.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLightRadius`;
funcDef.decl = `<entity> setLightRadius(<radius>)`;
funcDef.desc = `Sets the current radius of the light.`;
funcDef.example = `self setLightRadius(200);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLookAtEnt`;
funcDef.decl = `<entity> setLookAtEnt(<entity>)`;
funcDef.desc = `Set the entity this vehicle will orient towards.`;
funcDef.example = `eFlak88 setLookAtEnt(eFlakTarget);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setLookAtText`;
funcDef.decl = `<entity> setLookAtText(<line 1>, <line 2>)`;
funcDef.desc = `Set look at text for entity.`;
funcDef.example = `self setLookAtText(self.name, &"");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setMapCenter`;
funcDef.decl = `setMapCenter(<center>)`;
funcDef.desc = `Set the center of the map (used by the network code to optimize position data).`;
funcDef.example = `setMapCenter((0, 0, 0));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setMapNameString`;
funcDef.decl = `<hud> setMapNameString(<map name>)`;
funcDef.desc = `Set the map name string.`;
funcDef.example = `hud setMapNameString("Crash");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setMaxPitchRoll`;
funcDef.decl = `<entity> setMaxPitchRoll(<pitch>, <roll>)`;
funcDef.desc = `Sets max pitch and roll angle for this vehicle.`;
funcDef.example = `self setMaxPitchRoll(30, 30);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setMiniMap`;
funcDef.decl = `setMiniMap(<material>, <upper-left x>, <upper-left y>, <lower-right x>, <lower-right y>)`;
funcDef.desc = `Sets the info for the satelite map on the compass.`;
funcDef.example = `setMiniMap("compass_map_default", 12672, 5824, -4224, -11072);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setMissionDvar`;
funcDef.decl = `setMissionDvar(<dvar>, <value>)`;
funcDef.desc = `Changes the value of the specified mission dvar.`;
funcDef.example = `setMissionDvar("mission_01", 1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setMode`;
funcDef.decl = `<entity> setMode(<mode>)`;
funcDef.desc = `Set the mode of a turret.`;
funcDef.example = `mg42 setMode("auto_ai");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setModel`;
funcDef.decl = `<entity> setModel(<model>)`;
funcDef.desc = `Sets the model of the entity to the given model name.`;
funcDef.example = `splinter setModel("wood_plank2");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setMoveSpeedScale`;
funcDef.decl = `<player> setMoveSpeedScale(<scale>)`;
funcDef.desc = `Scales player movement speed by this amount.`;
funcDef.example = `self setMoveSpeedScale(1.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setNearGoalNotifyDist`;
funcDef.decl = `<entity> setNearGoalNotifyDist(<dist>)`;
funcDef.desc = `Set distance near goal at which near_goal notification should be sent once.`;
funcDef.example = `tank setNearGoalNotifyDist(50);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setNormalHealth`;
funcDef.decl = `<entity> setNormalHealth(<health>)`;
funcDef.desc = `Sets the normal health of this entity.`;
funcDef.example = `self setNormalHealth((self.maxHealth - self.damageTaken) / self.maxHealth);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setOffhandSecondaryClass`;
funcDef.decl = `<player> setOffhandSecondaryClass(<class>)`;
funcDef.desc = `Set whether player can use smoke grenades or flashbangs.`;
funcDef.example = `level.player setOffhandSecondaryClass("flash");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setOrigin`;
funcDef.decl = `<player> setOrigin(<origin>)`;
funcDef.desc = `Set the player's origin.`;
funcDef.example = `level.player setOrigin(plTruck.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPerk`;
funcDef.decl = `<player> setPerk(<perk>)`;
funcDef.desc = `Give a player the specified perk.`;
funcDef.example = `player setPerk("specialty_gpsjammer");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPhysicsGravityDir`;
funcDef.decl = `setPhysicsGravityDir(<direction>)`;
funcDef.desc = `Sets the direction of gravity for physics.`;
funcDef.example = `setPhysicsGravityDir((0, 0, 1));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPlayerAngles`;
funcDef.decl = `<player> setPlayerAngles(<angles>)`;
funcDef.desc = `Set the player's angles.`;
funcDef.example = `level.player setPlayerAngles((0, 240, 0));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPlayerIgnoreRadiusDamage`;
funcDef.decl = `<player> setPlayerIgnoreRadiusDamage(<player ignore radius damage>)`;
funcDef.desc = `Sets the player to ignore radius damage.`;
funcDef.example = `self setPlayerIgnoreRadiusDamage(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPlayerNameString`;
funcDef.decl = `<hud> setPlayerNameString(<player>)`;
funcDef.desc = `Set the player name string for a HUD element.`;
funcDef.example = `hud setPlayerNameString(player);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPlayerSpread`;
funcDef.decl = `<entity> setPlayerSpread(<spread>)`;
funcDef.desc = `Sets the spread of this turret when used by the player.`;
funcDef.example = `roofMg42 setPlayerSpread(0.2);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPrintChannel`;
funcDef.decl = `setPrintChannel(<channel>)`;
funcDef.desc = `Set the current print channel. Returns the previous channel.`;
funcDef.example = `prevchannel = setPrintChannel("script_bler");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setPulseFX`;
funcDef.decl = `<hud> setPulseFX(<speed>, <decayStart>, <decayDuration>)`;
funcDef.desc = `Set the HUD element string to display with a pulse effect.`;
funcDef.example = `elem setPulseFX(40, 2000, 600);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setRank`;
funcDef.decl = `<player> setRank(<rank id>, <prestige level>)`;
funcDef.desc = `Sets the player's rank and prestige level.`;
funcDef.example = `player setRank(1, 2);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setReverb`;
funcDef.decl = `<player> setReverb(<priority>, <room type>, <dry level>, <wet level>, <fade time>)`;
funcDef.desc = `Set the sound reverberation for the player.`;
funcDef.example = `level.player setReverb("snd_enveffectsprio_level", "stoneroom", 1, .7, 3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setRightArc`;
funcDef.decl = `<entity> setRightArc(<angle>)`;
funcDef.desc = `Set the amount that the turret can move to the right.`;
funcDef.example = `mg42 setRightArc(45);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSavedDvar`;
funcDef.decl = `setSavedDvar(<dvar>, <value>)`;
funcDef.desc = `Sets the value of a code "SAVED" dvar. Saved dvars are preserved in save games, and reset to default on level change.`;
funcDef.example = `setSavedDvar("r_eyesAdjust", "1");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setShader`;
funcDef.decl = `<hud> setShader(<material>, <width>, <height>)`;
funcDef.desc = `Set the material for this HUD element.`;
funcDef.example = `waypoint setShader("playbook_objective_stop", 15, 15);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setShadowHint`;
funcDef.decl = `<entity> setShadowHint(<priority>)`;
funcDef.desc = `Sets the shadow hint for the entity.`;
funcDef.example = `tankGun setShadowHint("normal");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSoundBlend`;
funcDef.decl = `<entity> setSoundBlend(<sound 1>, <sound 2>, <mix>)`;
funcDef.desc = `Set the sound blend on a blend entity.`;
funcDef.example = `blend setBlendSound("stalingrad_artillery_rumble_null", "stalingrad_artillery_rumble", 0.4);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSpawnWeapon`;
funcDef.decl = `<player> setSpawnWeapon(<weapon name>)`;
funcDef.desc = `Set the weapon that this player will spawn with.`;
funcDef.example = `self setSpawnWeapon("ak47");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSpawnerTeam`;
funcDef.decl = `<entity> setSpawnerTeam(<team>)`;
funcDef.desc = `Set the team for this spawner.`;
funcDef.example = `self setSpawnerTeam("axis");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSpeed`;
funcDef.decl = `<entity> setSpeed(<speed>, <acceleration>, <deceleration>)`;
funcDef.desc = `Sets the speed and acceleration for this vehicle.`;
funcDef.example = `self setSpeed(60, 15, 5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSpeedImmediate`;
funcDef.decl = `<entity> setSpeedImmediate(<speed>, <acceleration>, <deceleration>)`;
funcDef.desc = `Sets the speed and acceleration for this vehicle instantaneously. Direction will be toward the goal direction if there is a goal, otherwise the current direction.`;
funcDef.example = `self setSpeedImmediate(60, 15, 5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSpreadOverride`;
funcDef.decl = `<player> setSpreadOverride(<spread>)`;
funcDef.desc = `Sets the player's fixed spread value.`;
funcDef.example = `level.player setSpreadOverride(30);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setStableMissle`;
funcDef.decl = `<entity> setStableMissle(<flag>)`;
funcDef.desc = `The entity will shoot missles that do not destabilize. Only applicable to vehicles, players and AI.`;
funcDef.example = `self setStableMissle(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setStance`;
funcDef.decl = `<player> setStance(<stance>)`;
funcDef.desc = `Sets the stance of the player. Possible values are "crouch", "prone" and "stand".`;
funcDef.example = `level.player setStance("stand");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSunDirection`;
funcDef.decl = `setSunDirection(<dir to sun>)`;
funcDef.desc = `Overrides the sun direction for a level. Use "resetSunDirection" to revert to the map's values.`;
funcDef.example = `setSunDirection((-0.5, 0.5, -1.0));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSunLight`;
funcDef.decl = `setSunLight(<red>, <green>, <blue>)`;
funcDef.desc = `Overrides the sun color for a level. Use "resetSunLight" to revert to the map's values.`;
funcDef.example = `setSunLight(1.2; 1.2; 0.4);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSuppressionTime`;
funcDef.decl = `<entity> setSuppressionTime(<time>)`;
funcDef.desc = `Sets the time that a turret uses supressing fire after losing sight of an enemy.`;
funcDef.example = `roofMg42 setSuppressionTime(1.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setSwitchNode`;
funcDef.decl = `<entity> setSwitchNode(<source node>, <dest node>)`;
funcDef.desc = `Sets a switch node for this vehicle.`;
funcDef.example = `tank2 setSwitchNode(tank2SNode1, tank2SNode2);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTargetEnt`;
funcDef.decl = `<hud> setTargetEnt(<entity>)`;
funcDef.desc = `Set the entity that this waypoint should target. In MP, entity should already be a broadcasting entity, as with objective_onEntity().`;
funcDef.example = `waypoint setTargetEnt(level.axis.bombCarrier);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTargetEntity`;
funcDef.decl = `<entity> setTargetEntity(<target>)`;
funcDef.desc = `Sets the target of this turret.`;
funcDef.example = `roofMg42 setTargetEntity(target);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTargetYaw`;
funcDef.decl = `<entity> setTargetYaw(<yaw>)`;
funcDef.desc = `Set the target yaw direction for this vehicle. Goal yaw has priority over target yaw.`;
funcDef.example = `level.flak1 setTargetYaw(vec[1]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTeamForTrigger`;
funcDef.decl = `<trigger> setTeamForTrigger(<team name>)`;
funcDef.desc = `Set the team that this trigger will react to.`;
funcDef.example = `self setTeamForTrigger(game[ "attackers" ]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTeamRadar`;
funcDef.decl = `setTeamRadar(<team>, <availability>)`;
funcDef.desc = `Sets whether a team has radar or not.`;
funcDef.example = `setTeamRadar("allies", true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTeamScore`;
funcDef.decl = `setTeamScore(<team>, <score>)`;
funcDef.desc = `Set a team's score.`;
funcDef.example = `setTeamScore("allies", 100);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTenthsTimer`;
funcDef.decl = `<hud> setTenthsTimer(<time>)`;
funcDef.desc = `Set a time HUD element to count down in tenths of a second.`;
funcDef.example = `self.kc_timer setTenthsTimer(self.archiveTime - delay);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTenthsTimerUp`;
funcDef.decl = `<hud> setTenthsTimerUp(<time>)`;
funcDef.desc = `Set a time HUD element to count up in tenths of a second.`;
funcDef.example = `self.kc_timer setTenthsTimerUp(self.archiveTime - delay);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setText`;
funcDef.decl = `<hud> setText(<text>)`;
funcDef.desc = `Set HUD text for this element.`;
funcDef.example = `level.introString1 setText(string1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setThreatBias`;
funcDef.decl = `setThreatBias(<group for>, <group against>, <bias>)`;
funcDef.desc = `Make first group ignored by second group.`;
funcDef.example = `setThreatBias("axis", "flanking_team", 120);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setThreatBiasAgainstAll`;
funcDef.decl = `setThreatBiasAgainstAll(<group>, <bias>)`;
funcDef.desc = `Set the threatbias a group has against all others.`;
funcDef.example = `setThreatBiasAgainstAll("flanking_team", 120);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setThreatBiasGroup`;
funcDef.decl = `<entity> setThreatBiasGroup(<group>)`;
funcDef.desc = `Set or clear threat bias group of an AI or player.`;
funcDef.example = `self setThreatBiasGroup("flanking_team");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTimeScale`;
funcDef.decl = `setTimeScale(<timescale>)`;
funcDef.desc = `Sets the current timescale.`;
funcDef.example = `setTimeScale(0.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTimer`;
funcDef.decl = `<hud> setTimer(<time>)`;
funcDef.desc = `Set a timer HUD element to count down.`;
funcDef.example = `level.reinforcementHud setTimer(level.counter);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTimerUp`;
funcDef.decl = `<hud> setTimerUp(<time>)`;
funcDef.desc = `Set a timer HUD element to count up.`;
funcDef.example = `level.reinforcementHud setTimerUp(level.counter);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTopArc`;
funcDef.decl = `<entity> setTopArc(<angle>)`;
funcDef.desc = `Set the amount that the turret can move to the top.`;
funcDef.example = `mg42 setTopArc(45);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTurningAbility`;
funcDef.decl = `<entity> setTurningAbility(<turning ability>)`;
funcDef.desc = `If this is higher, helicopters can make sharper turns to match goal positions better.`;
funcDef.example = `self setTurningAbility(0.9);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTurretIgnoreGoals`;
funcDef.decl = `<entity> setTurretIgnoreGoals(<ignoreGoals>)`;
funcDef.desc = `Sets the ignoreGoals flag for the turret.`;
funcDef.example = `roofMg42 setTurretIgnoreGoals(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTurretTargetEnt`;
funcDef.decl = `<entity> setTurretTargetEnt(<target entity>, <target offset>)`;
funcDef.desc = `Set the target entity for this vehicle turret.`;
funcDef.example = `eFlak88 setTurretTargetEnt(eFlaktarget, eFlaktarget.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTurretTargetVec`;
funcDef.decl = `<entity> setTurretTargetVec(<target position>)`;
funcDef.desc = `Set the target position for this vehicle turret.`;
funcDef.example = `level.flak1 setTurretTargetVec(vec1);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setTurretTeam`;
funcDef.decl = `<entity> setTurretTeam(<team>)`;
funcDef.desc = `Sets the team of a turret.`;
funcDef.example = `roofMg42 setTurretTeam("axis");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setValue`;
funcDef.decl = `<hud> setValue(<value>)`;
funcDef.desc = `Set a value HUD element to a given value.`;
funcDef.example = `level.reinforcementHud setValue(0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVehGoalPos`;
funcDef.decl = `<entity> setVehGoalPos(<goalpos> <stopAtGoal>)`;
funcDef.desc = `Set the target position for this vehicle.`;
funcDef.example = `tank setVehGoalPos((0, 0, 0), true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVehWeapon`;
funcDef.decl = `<entity> setVehWeapon(<weapon>)`;
funcDef.desc = `Set the vehicle's weapon.`;
funcDef.example = `chopper setVehWeapon("agm_114");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVehicleLookAtText`;
funcDef.decl = `<entity> setVehicleLookAtText(<lookat text line 1> <lookat text line 2>)`;
funcDef.desc = `Set look at text for vehicle.`;
funcDef.example = `self setVehicleLookAtText(vehicleName, level.vehicleTypeFancy[self.vehicleType]);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVehicleTeam`;
funcDef.decl = `<entity> setVehicleTeam(<team>)`;
funcDef.desc = `Set which team a vehicle is on.`;
funcDef.example = `self setVehicleTeam("allies");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVelocity`;
funcDef.decl = `<player> setVelocity(<velocity>)`;
funcDef.desc = `Sets the player's velocity.`;
funcDef.example = `level.player setVelocity((-400, 0, 100));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setViewModel`;
funcDef.decl = `<player> setViewModel(<view model>)`;
funcDef.desc = `Set the player's current view model.`;
funcDef.example = `self setViewModel("viewmodel_hands_russian_vetrn");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setViewModelDepthOfField`;
funcDef.decl = `<player> setViewModelDepthOfField(<start>, <end>)`;
funcDef.desc = `Set the depth of field values for the player's view model when at hip. If start >= end, depth of field is disabled.`;
funcDef.example = `self setViewModelDepthOfField(2, 10);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVoteNoCount`;
funcDef.decl = `setVoteNoCount(<count>)`;
funcDef.desc = `Sets the number of No votes.`;
funcDef.example = `setVoteNoCount(0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVoteString`;
funcDef.decl = `setVoteString(<string>)`;
funcDef.desc = `Sets the string for a vote.`;
funcDef.example = `setVoteString("Extend map?");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVoteTime`;
funcDef.decl = `setVoteTime(<time>)`;
funcDef.desc = `Sets the start time for a vote.`;
funcDef.example = `setVoteTime(10000);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setVoteYesCount`;
funcDef.decl = `setVoteYesCount(<count>)`;
funcDef.desc = `Sets the number of Yes votes.`;
funcDef.example = `setVoteYesCount(0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setWaitNode`;
funcDef.decl = `<entity> setWaitNode(<node>)`;
funcDef.desc = `Sets a wait node for this vehicle.`;
funcDef.example = `self setWaitNode(pathSpot);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setWaitSpeed`;
funcDef.decl = `<entity> setWaitSpeed(<speed>)`;
funcDef.desc = `Sets the wait speed for this vehicle in miles per hour.`;
funcDef.example = `self setWaitSpeed(5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setWaypoint`;
funcDef.decl = `<hud> setWaypoint(<constantSize>, <offscreenMaterialName>)`;
funcDef.desc = `Sets a HUD element to be a waypoint.`;
funcDef.example = `newDeathIcon setWaypoint(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setWeaponAmmoClip`;
funcDef.decl = `<player> setWeaponAmmoClip(<weapon>, <ammunition>)`;
funcDef.desc = `Set the weapon clip amount for the given weapon.`;
funcDef.example = `level.player setWeaponAmmoClip("m16", 30);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setWeaponAmmoStock`;
funcDef.decl = `<player> setWeaponAmmoStock(<weapon>, <ammunition>)`;
funcDef.desc = `Set the ammunition stockpile for the given weapon.`;
funcDef.example = `level.player setWeaponAmmoStock("m16", 300);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setWinningPlayer`;
funcDef.decl = `setWinningPlayer(<player>)`;
funcDef.desc = `Sets a player to be the winner.`;
funcDef.example = `setWinningPlayer(player);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setWinningTeam`;
funcDef.decl = `setWinningTeam(<team>)`;
funcDef.desc = `Sets a team to be the winner.`;
funcDef.example = `setWinningTeam("allies");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `setYawSpeed`;
funcDef.decl = `<entity> setYawSpeed(<speed>, <acceleration>, <deceleration>, <overshoot percent>)`;
funcDef.desc = `Sets the yaw speed for this vehicle.`;
funcDef.example = `self setYawSpeed(120, 60);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `shellShock`;
funcDef.decl = `<player> shellShock(<shellshockname>, <duration>, <overrideCheat>)`;
funcDef.desc = `Start a shell shock sequence for the player. The shell shock must be precached, otherwise calling this script will cause a script error.`;
funcDef.example = `self shellShock("death", 5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `shootTurret`;
funcDef.decl = `<entity> shootTurret()`;
funcDef.desc = `Shoots a turret.`;
funcDef.example = `roofMg42 shootTurret();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `show`;
funcDef.decl = `<entity> show()`;
funcDef.desc = `Show a hidden entity.`;
funcDef.example = `brokenWindow show();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `showAllParts`;
funcDef.decl = `<entity> showAllParts()`;
funcDef.desc = `Show all parts of an entity.`;
funcDef.example = `self showAllParts();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `showPart`;
funcDef.decl = `<entity> showPart(<tagname>, <modelname>)`;
funcDef.desc = `Show part of an entity.`;
funcDef.example = `self showPart("tag_weapon", "weapon_saw");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `showScoreBoard`;
funcDef.decl = `<player> showScoreBoard()`;
funcDef.desc = `Updates the scoreboard data on a given client if they are looking at it.`;
funcDef.example = `self showScoreBoard();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `showToPlay`;
funcDef.decl = `<entity> showToPlayer(<player>)`;
funcDef.desc = `Show the entity to a given client.`;
funcDef.example = `self showToPlayer(player);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `showViewModel`;
funcDef.decl = `<player> showViewModel()`;
funcDef.desc = `Show the player's current view model.`;
funcDef.example = `level.player showViewModel();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `sightConeTrace`;
funcDef.decl = `<entity> sightConeTrace(<sight position>, <ignore entity>)`;
funcDef.desc = `Determines how much the entity can be seen from the given position, using the same check that is used by grenades. Performs multiple sight traces and returns an approximation to how much of the entity is visible from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially visible.`;
funcDef.example = `visibilityAmount = player sightConeTrace(eye.origin, eye);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `sightTracePassed`;
funcDef.decl = `sightTracePassed(<start>, <end>, <hit characters>, <ignore entity>)`;
funcDef.desc = `Allows script to do a point trace with MASK_OPAQUE_AI. Returns true if trace complete, else returns false.`;
funcDef.example = `success = sightTracePassed(magicBulletOrigin.origin, eyePos, true, undefined);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `sin`;
funcDef.decl = `sin(<angle>)`;
funcDef.desc = `Returns the sine of an angle.`;
funcDef.example = `frac = sin(degrees);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `solid`;
funcDef.decl = `<entity> solid()`;
funcDef.desc = `Set the solid flag, so that this object is collidable.`;
funcDef.example = `self solid();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `soundExists`;
funcDef.decl = `soundExists(<alias>)`;
funcDef.desc = `Returns true if the sound alias exists.`;
funcDef.example = `if (soundExists("dirt_skid")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `soundFade`;
funcDef.decl = `soundFade(<time>)`;
funcDef.desc = `Fades the sound out.`;
funcDef.example = `soundFade(3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `spawn`;
funcDef.decl = `spawn(<classname>, <origin>, <flags>, <radius>, <height>)`;
funcDef.desc = `Spawns a new entity and returns a reference to the entity.`;
funcDef.example = `org = spawn("script_origin", self getOrigin());`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `spawnFX`;
funcDef.decl = `spawnFX(<effect id>, <position>, <forward>, <up>)`;
funcDef.desc = `Create an effect entity that can be re-triggered efficiently at arbitrary intervals. This doesn't play the effect. Use delete to free it when done.`;
funcDef.example = `fxObj = spawnFX(fxId, pos, dir);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `spawnStruct`;
funcDef.decl = `spawnStruct()`;
funcDef.desc = `Allocates a data structure.`;
funcDef.example = `struct = spawnStruct();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `spawnTurret`;
funcDef.decl = `spawnTurret(<classname>, <origin>, <weapon>)`;
funcDef.desc = `Spawns a new turret, eg MG42 or flag gun and returns a reference to it.`;
funcDef.example = `turret = spawnTurret("misc_turret", (0, 0, 0), "heli_minigun_noai");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `spawnVehicle`;
funcDef.decl = `spawnVehicle(<model>, <targetname>, <vehicletype>, <origin>, <angles>)`;
funcDef.desc = `Spawns a new turret, eg MG42 or flag gun and returns a reference to it.`;
funcDef.example = `vehicle = spawnVehicle("vehicle_blackhawk", "vclogger", "blackhawk", (0, 0, 0), (0, 0, 0));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stalingradSpawn`;
funcDef.decl = `<entity> stalingradSpawn(<targetname>)`;
funcDef.desc = `Force spawns an actor from an actor spawner, reguardless of whether the spawn point is in sight or if the spawn will cause a telefrag.`;
funcDef.example = `spawned = driver stalingradSpawn(name);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `startEngineSound`;
funcDef.decl = `<entity> startEngineSound()`;
funcDef.desc = `Start the engine sound for this vehicle.`;
funcDef.example = `truck startEngineSound();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `startFiring`;
funcDef.decl = `<entity> startFiring()`;
funcDef.desc = `Starts a turret firing.`;
funcDef.example = `mg42 startFiring();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `startIgnoringSpotLight`;
funcDef.decl = `<entity> startIgnoringSpotLight()`;
funcDef.desc = `Prevent spot light from affecting this entity.`;
funcDef.example = `self startIgnoringSpotLight()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `startPath`;
funcDef.decl = `<entity> startPath()`;
funcDef.desc = `Starts the vehicle following this path.`;
funcDef.example = `bomber startPath();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `startRagdoll`;
funcDef.decl = `<entity> startRagdoll(<rig_index>)`;
funcDef.desc = `Begin ragdoll physics for this entity. Does nothing if the entity is already a ragdoll.`;
funcDef.example = `self startRagdoll();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopAllRumbles`;
funcDef.decl = `stopAllRumbles()`;
funcDef.desc = `Stops all of the current rumbles.`;
funcDef.example = `stopAllRumbles();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopAnimScripted`;
funcDef.decl = `<entity> stopAnimScripted()`;
funcDef.desc = `Halts animscript on this entity.`;
funcDef.example = `self stopAnimScripted();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopCinematicInGame`;
funcDef.decl = `stopCinematicInGame()`;
funcDef.desc = `Stop the currently playing cinematic.`;
funcDef.example = `stopCinematicInGame();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopEngineSound`;
funcDef.decl = `<entity> stopEngineSound()`;
funcDef.desc = `Stop the engine sound for this vehicle.`;
funcDef.example = `truck stopEngineSound();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopFiring`;
funcDef.decl = `<entity> stopFiring()`;
funcDef.desc = `Stops a turret firing.`;
funcDef.example = `mg42 stopFiring();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopIgnoringSpotLight`;
funcDef.decl = `<entity> stopIgnoringSpotLight()`;
funcDef.desc = `Stop preventing spot light from affecting this entity.`;
funcDef.example = `self stopIgnoringSpotLight()`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopLocalSound`;
funcDef.decl = `<player> stopLocalSound(<sound>)`;
funcDef.desc = `Stops all instances of a local soundalias running on a player.`;
funcDef.example = `level.player stopLocalSound("annoying_siren");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopLoopSound`;
funcDef.decl = `<entity> stopLoopSound()`;
funcDef.desc = `Stop a looping sound.`;
funcDef.example = `car stopLoopSound();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopRumble`;
funcDef.decl = `<entity> stopRumble(<rumble>)`;
funcDef.desc = `Stops the playing of a rumble on an entity.`;
funcDef.example = `self stopRumble("tank_rumble");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopShellShock`;
funcDef.decl = `<player> stopShellShock()`;
funcDef.desc = `Stop a shell shock sequence for the player.`;
funcDef.example = `self stopShellShock();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopSounds`;
funcDef.decl = `<entity> stopSounds()`;
funcDef.desc = `Stop all sounds on an entity. *WARNING*, You must have a wait between stopSounds() and delete() or the sound will not stop.`;
funcDef.example = `beatBox stopSounds();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `stopUseAnimTree`;
funcDef.decl = `<entity> stopUseAnimTree()`;
funcDef.desc = `Stop using the current anim tree.`;
funcDef.example = `self stopUseAnimTree();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `strTok`;
funcDef.decl = `strTok(<string>, <delim>)`;
funcDef.desc = `Tokenizes string by the delimiters delim. Returns the array of string tokens.`;
funcDef.example = `info = strTok(playerInfo, ",");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `suicide`;
funcDef.decl = `<player> suicide()`;
funcDef.desc = `Kills the player immediately as a suicide.`;
funcDef.example = `self suicide();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `switchToOffhand`;
funcDef.decl = `<player> switchToOffhand(<weapon>)`;
funcDef.desc = `Switch the player's offhand weapon.`;
funcDef.example = `level.player switchToOffhand(weapon);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `switchToWeapon`;
funcDef.decl = `<player> switchToWeapon(<weapon>)`;
funcDef.desc = `Switch to a different weapon.`;
funcDef.example = `level.player switchToWeapon("mosin_nagant");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `tableLookup`;
funcDef.decl = `tableLookup(<filename>, <search column num>, <search value>, <return value column num>)`;
funcDef.desc = `Look up a row in a table and pull out a particular column from that row.`;
funcDef.example = `level.maxRank = int(tableLookup("mp/rankTable.csv", 0, "maxrank", 1));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `tableLookupIString`;
funcDef.decl = `tableLookupIsString(<filename>, <search column num>, <search value>, <return value column num>)`;
funcDef.desc = `Look up a row in a table and pull out a particular column from that row in an Istring.`;
funcDef.example = `level.tbl_PerkData[i]["name"] = tableLookupIString("mp/statsTable.csv", 0, i, 3);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `takeAllWeapons`;
funcDef.decl = `<player> takeAllWeapons()`;
funcDef.desc = `Remove all weapons from the player.`;
funcDef.example = `level.player takeAllWeapons();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `takeWeapon`;
funcDef.decl = `<player> takeWeapon(<weapon>)`;
funcDef.desc = `Take a weapon from the player.`;
funcDef.example = `level.player takeWeapon("m16_grenadier");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `tan`;
funcDef.decl = `tan(<angle>)`;
funcDef.desc = `Returns the tangent of an angle.`;
funcDef.example = `frac = tan(degrees);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_clearReticleLockOn`;
funcDef.decl = `target_clearReticleLockOn()`;
funcDef.desc = `Cancels any lock-on sequence on the HUD.`;
funcDef.example = `target_clearReticleLockOn();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_getArray`;
funcDef.decl = `target_getArray()`;
funcDef.desc = `Gets an array of entities that are set as targets.`;
funcDef.example = `targets = target_getArray();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_isInCircle`;
funcDef.decl = `target_isInCircle(<target entity>, <player>, <fov>, <radius>)`;
funcDef.desc = `Returns whether a target is within a given radius from the center of the player's screen.`;
funcDef.example = `if (target_isInCircle(enemyChopper, level.player, 65, 100)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_isInRect`;
funcDef.decl = `target_isInRect(<target entity>, <player>, <fov>, <halfWidth>, <halfHeight>)`;
funcDef.desc = `Returns whether a target is within a rectangle, centered in the center of the player's screen.`;
funcDef.example = `if (target_isInRect(enemyChopper, level.player, 65, 100, 100)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_isTarget`;
funcDef.decl = `target_isTarget(<entity>)`;
funcDef.desc = `Returns whether an entity has been marked as a target.`;
funcDef.example = `if (target_isTarget(foundEnt)) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_remove`;
funcDef.decl = `target_remove(<target entity>)`;
funcDef.desc = `Removes a target.`;
funcDef.example = `target_remove(enemyChopper);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_set`;
funcDef.decl = `target_set(<target entity>, <target offset>)`;
funcDef.desc = `Adds a new target to draw on the HUD.`;
funcDef.example = `target_set(enemyChopper);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_setAttackMode`;
funcDef.decl = `target_setAttackMode(<target entity>, <mode name>)`;
funcDef.desc = `Sets how missiles and rockets should approach the target.`;
funcDef.example = `target_setAttackMode(enemyTank, "top");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_setJavelinOnly`;
funcDef.decl = `target_setJavelinOnly(<target entity>, <javelinOnly>)`;
funcDef.desc = `Target will only draw on player's hud when they are looking through the Javelin-weapon's sight.`;
funcDef.example = `target_setJavelinOnly(enemyTank, true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_setOffscreenShader`;
funcDef.decl = `target_setOffscreenShader(<target entity>, <material>)`;
funcDef.desc = `Sets the material that is used when a target clamps to the edge of the screen. The target must have already been created with target_set.`;
funcDef.example = `target_setOffscreenShader(enemyChopper, "arrow");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_setShader`;
funcDef.decl = `target_setShader(<target entity>, <material>)`;
funcDef.desc = `Changes the material of a target. The target must have already been created with target_set.`;
funcDef.example = `target_setShader(enemyChopper, "locked_on_shader");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `target_startReticleLockOn`;
funcDef.decl = `target_startReticleLockOn(<target entity>, <duration>)`;
funcDef.desc = `Begins the lock-on sequence for the target on the hud. This affects the animation of the vehicle reticle.`;
funcDef.example = `target_startReticleLockOn(enemyChopper, 4);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `threatBiasGroupExists`;
funcDef.decl = `threatBiasGroupExists(<group>)`;
funcDef.desc = `Check if a threat bias group exists.`;
funcDef.example = `if (!threatBiasGroupExists("flanking_team")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `toLower`;
funcDef.decl = `toLower(<string>)`;
funcDef.desc = `Converts a string to a lower case string which is returned.`;
funcDef.example = `level.script = toLower(getDvar("mapname"));`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `triggerFX`;
funcDef.decl = `triggerFX(<effect entity>, <when>)`;
funcDef.desc = `Replays the effect associated with the effect entity. This does not kill any existing effects.`;
funcDef.example = `triggerFX(fxObj, -5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `turretFireDisable`;
funcDef.decl = `<entity> turretFireDisable()`;
funcDef.desc = `Disable the turret's ability to fire.`;
funcDef.example = `chaingun turretFireDisable();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `turretFireEnable`;
funcDef.decl = `<entity> turretFireEnable()`;
funcDef.desc = `Enable the turret's ability to fire.`;
funcDef.example = `chaingun turretFireEnable();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `unlink`;
funcDef.decl = `<entity> unlink()`;
funcDef.desc = `Unlinks a linked entity from another entity.`;
funcDef.example = `guy unlink();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `unlockLightVis`;
funcDef.decl = `<entity> unlockLightVis()`;
funcDef.desc = `Unlocks the lights that are visible by this entity.`;
funcDef.example = `spawn unlockLightVis();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `unsetPerk`;
funcDef.decl = `<player> unsetPerk(<perk>)`;
funcDef.desc = `Takes the specified perk from the player.`;
funcDef.example = `player unsetPerk("specialty_gpsjammer");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `updateClientNames`;
funcDef.decl = `updateClientNames()`;
funcDef.desc = `Update all of the client names. Only works in "manual_change" mode.`;
funcDef.example = `updateClientNames();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `updateDMScores`;
funcDef.decl = `<player> updateDMScores()`;
funcDef.desc = `Updates the client's knowledge of scores for himself and the (next) best player in the game. For use in Deathmatch.`;
funcDef.example = `player updateDMScores();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `updateGamerProfile`;
funcDef.decl = `updateGamerProfile()`;
funcDef.desc = `Saves the player's gamer profile. Does nothing on PC.`;
funcDef.example = `updateGamerProfile();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `updateScores`;
funcDef.decl = `<player> updateScores()`;
funcDef.desc = `Updates the client's knowledge of team scores.`;
funcDef.example = `player updateScores();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `uploadScore`;
funcDef.decl = `<player> uploadScore(<mission>, <score>)`;
funcDef.desc = `Upload arcade mode score to XBLIVE leaderboards.`;
funcDef.example = `level.player uploadScore(0, 100);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `uploadTime`;
funcDef.decl = `<player> uploadTime(<mission>, <time>)`;
funcDef.desc = `Upload a time to XBLIVE leaderboards.`;
funcDef.example = `level.player uploadTime(19, 15.2);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `useAnimTree`;
funcDef.decl = `<entity> useAnimTree(<anim tree>)`;
funcDef.desc = `Set the animation tree of an entity.`;
funcDef.example = `self useAnimTree(#animtree);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `useButtonPressed`;
funcDef.decl = `<player> useButtonPressed()`;
funcDef.desc = `Check if the player is pressing the "use" button.`;
funcDef.example = `if (self useButtonPressed()) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `useBy`;
funcDef.decl = `<entity> useBy(<using entity>)`;
funcDef.desc = `Uses the entity with the passed in entity as the activator.`;
funcDef.example = `level.armoredCar.turrent useBy(level.player);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `useTriggerRequireLookAt`;
funcDef.decl = `<entity> useTriggerRequireLookAt()`;
funcDef.desc = `Modifies the use trigger so that it requires the user to be looking at it.`;
funcDef.example = `fuelLever useTriggerRequireLookAt();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `vectorDot`;
funcDef.decl = `vectorDot(<vector A>, <vector B>)`;
funcDef.desc = `Returns the dot product of two vectors.`;
funcDef.example = `dot = vectorDot(forward, normal);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `vectorFromLineToPoint`;
funcDef.decl = `vectorFromLineToPoint(<segment A>, <segment B>, <P>)`;
funcDef.desc = `Given a line and a point P, this returns a vector perpendicular to the line and pointing from the line to P.`;
funcDef.example = `vec = vectorFromLineToPoint(a, b, p);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `vectorLerp`;
funcDef.decl = `vectorLerp(<from>, <to>, <fraction>)`;
funcDef.desc = `Linear interpolates between two vectors.`;
funcDef.example = `color = vectorLerp(oldColor, newColor, timeElapsed / timeTotal);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `vectorNormalize`;
funcDef.decl = `vectorNormalize(<vector>)`;
funcDef.desc = `Returns a normalized copy of this vector.`;
funcDef.example = `difference = vectorNormalize(end - start);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `vectorToAngles`;
funcDef.decl = `vectorToAngles(<vector>)`;
funcDef.desc = `Returns a set of angles corresponding to the given vector.`;
funcDef.example = `angles = vectorToAngles(end - start);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `vehForceMaterialSpeed`;
funcDef.decl = `<entity> vehForceMaterialSpeed(<force>, <speed>)`;
funcDef.desc = `Force treads to scroll as if the vehicle was moving at the given speed.`;
funcDef.example = `animatedTank vehForceMaterialSpeed(true, 20);
animatedTank vehForceMaterialSpeed(false);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `vibrate`;
funcDef.decl = `<entity> vibrate(<direction>, <amplitute>, <period>, <time>)`;
funcDef.desc = `Causes a script enttiy to vibrate, rotating around its origin, along a given vector direction.`;
funcDef.example = `self vibrate(directionVec, 0.3, 0.4, 1.0);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `viewKick`;
funcDef.decl = `<player> viewKick(<force>, <source>)`;
funcDef.desc = `Damage the player, and throw the screen around.`;
funcDef.example = `level.player viewKick(127, level.player.origin);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `visionSetNaked`;
funcDef.decl = `visionSetNaked(<visionset name>, <transition time>)`;
funcDef.desc = `Sets players' naked-eye vision. Optionally give a transition time from the current vision.`;
funcDef.example = `visionSetNaked("armada", 1.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `visionSetNight`;
funcDef.decl = `visionSetNight(<visionset name>, <transition time>)`;
funcDef.desc = `Sets the vision preset to use for players' night vision view.`;
funcDef.example = `visionSetNight("armada_nvg", 1.5);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponAltWeaponName`;
funcDef.decl = `weaponAltWeaponName(<weapon>)`;
funcDef.desc = `Returns the name of the weapon this weapon has for its alternate mode. Returns "none" if there is no alt fire. Subsequent alternate weapons can be retrieved by calling the function again with the new weapon names until it returns the original weapon.`;
funcDef.example = `grenadeLauncherAttachment = weaponAltWeaponName("m16_gl_mp");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponClass`;
funcDef.decl = `weaponClass(<weapon>)`;
funcDef.desc = `Returns the class of weapon that this weapon is, such as "rifle", "smg", "spread", "pistol", etc.`;
funcDef.example = `if (weaponClass("m16_basic") == "rifle") {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponClipSize`;
funcDef.decl = `weaponClipSize(<weapon>)`;
funcDef.desc = `Get the weapon clip size for the given weapon.`;
funcDef.example = `clipSize = weaponClipSize("mosin_nagant_sniper");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponFightDist`;
funcDef.decl = `weaponFightDist(<weapon>)`;
funcDef.desc = `Returns the fight distance for this weapon.`;
funcDef.example = `fightDist = weaponFightDist("mosin_nagant_sniper");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponFireTime`;
funcDef.decl = `weaponFireTime(<weapon>)`;
funcDef.desc = `Get the weapon fire time for the given weapon.`;
funcDef.example = `fireTime = weaponFireTime("mosin_nagant_sniper");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponInventoryType`;
funcDef.decl = `weaponInventoryType(<weapon>)`;
funcDef.desc = `Returns the way this weapon is stored, such as "altmode", "item", "offhand", or "primary".`;
funcDef.example = `if (weaponInventoryType("rpg_mp") == "item") {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponIsBoltAction`;
funcDef.decl = `weaponIsBoltAction(<weapon>)`;
funcDef.desc = `Get whether this weapon has a bolt action.`;
funcDef.example = `if (weaponIsBoltAction("m14_scoped")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponIsSemiAuto`;
funcDef.decl = `weaponIsSemiAuto(<weapon>)`;
funcDef.desc = `Get whether this weapon is semi automatic.`;
funcDef.example = `if (weaponIsSemiAuto("m14_scoped")) {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponLockFinalize`;
funcDef.decl = `<player> weaponLockFinalize(<entity>)`;
funcDef.desc = `Locks player's weapon onto an entity. Implies weaponLockStart(), so this may be called to jump to a hard lock.`;
funcDef.example = `level.player weaponLockFinalize(enemyGuy);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponLockFree`;
funcDef.decl = `<player> weaponLockFree()`;
funcDef.desc = `Clear the player's weapon lock.`;
funcDef.example = `level.player weaponLockFree();`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponLockNoClearance`;
funcDef.decl = `<player> weaponLockNoClearance(<bool>)`;
funcDef.desc = `When set to true, the player will be unable to fire their lockon weapon, and will recieve a hint print telling them that there is an obstruction.`;
funcDef.example = `level.player weaponLockNoClearance(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponLockStart`;
funcDef.decl = `<player> weaponLockStart(<entity>)`;
funcDef.desc = `Begins player's weapon lockon sequence (hud effects, etc). Will clear any existing hard lock. Use weaponLockFinalize() to complete lock.`;
funcDef.example = `level.player weaponLockStart(enemyGuy);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponLockTagetTooClose`;
funcDef.decl = `<player> weaponLockTagetTooClose(<bool>)`;
funcDef.desc = `When set to true, the player will be unable to fire their lockon weapon, and will recieve a hint print telling them that they are too close.`;
funcDef.example = `level.player weaponLockTagetTooClose(true);`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponMaxAmmo`;
funcDef.decl = `weaponMaxAmmo(<weapon>)`;
funcDef.desc = `Returns the max amount of ammo this weapon is meant to hold. Stockpile only, not the clip.`;
funcDef.example = `max = weaponMaxAmmo("mp5");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponMaxDist`;
funcDef.decl = `weaponMaxDist(<weapon>)`;
funcDef.desc = `Returns the maximum distance for this weapon.`;
funcDef.example = `maxDist = weaponMaxDist("m16_grenadier");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponStartAmmo`;
funcDef.decl = `weaponStartAmmo(<weapon>)`;
funcDef.desc = `Returns the amount of ammo this weapon is meant to start with when first given to a player.`;
funcDef.example = `numRounds = weaponStartAmmo("mp5");`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `weaponType`;
funcDef.decl = `weaponType(<weapon>)`;
funcDef.desc = `Returns the type of weapon that this weapon is, such as "bullet", "projectile", "grenade", or "binoculars".`;
funcDef.example = `if (weaponType("mosin_nagant_sniper") == "bullet") {
	// Code
}`;
defs.push(funcDef);

funcDef = new DefFunction;
funcDef.name = `worldEntNumber`;
funcDef.decl = `worldEntNumber()`;
funcDef.desc = `Returns the entity number for the world.`;
funcDef.example = `entNum = worldEntNumber();`;
defs.push(funcDef);
