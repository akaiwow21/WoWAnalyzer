import CoreCombatLogParser from 'parser/core/CombatLogParser';

import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import Abilities from './modules/Abilities';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import SpellUsable from './modules/features/SpellUsable';
import Checklist from './modules/features/checklist/Module';

import FrostFeverUptime from './modules/features/FrostFeverUptime';
import RimeEfficiency from './modules/features/RimeEfficiency';
import HardHowlingBlastCasts from './modules/features/HardHowlingBlastCasts';
import KillingMachineEfficiency from './modules/features/KillingMachine';
import BreathOfSindragosa from './modules/talents/BreathOfSindragosa';
import HypothermicPresence from './modules/talents/HypothermicPresence';

import RuneTracker from './modules/features/RuneTracker';
import RuneDetails from '../shared/RuneDetails';
import RunicPowerDetails from './modules/runicpower/RunicPowerDetails';
import RunicPowerTracker from './modules/runicpower/RunicPowerTracker';

import GatheringStorm from './modules/talents/GatheringStorm';
import Frostscythe from './modules/talents/Frostscythe';

// Runes
import RuneOfTheFallenCrusader from '../shared/runeforges/RuneOfTheFallenCrusader';
import RuneOfHysteria from '../shared/runeforges/RuneOfHysteria';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Core
    cooldownThroughputTracker: CooldownThroughputTracker,
    abilities: Abilities,
    alwaysBeCasting: AlwaysBeCasting,
    spellUsable: SpellUsable,
    checklist: Checklist,

    // Features
    HardHowlingBlastCasts: HardHowlingBlastCasts,
    frostfeverUptime: FrostFeverUptime,
    rimeEfficiency: RimeEfficiency,
    killingMachineEfficiency: KillingMachineEfficiency,
    breathofSindragoa: BreathOfSindragosa,
    hypothermicPresence: HypothermicPresence,

    //resource tracker
    runeTracker: RuneTracker,
    runeDetails: RuneDetails,
    runicPowerDetails: RunicPowerDetails,
    runicPowerTracker: RunicPowerTracker,

    //talents
    gatheringStorm: GatheringStorm,
    frostscythe: Frostscythe,

    // Runes
    runeOfTheFallenCrusader: RuneOfTheFallenCrusader,
    runeOfHysteria: RuneOfHysteria
  };
}

export default CombatLogParser;
