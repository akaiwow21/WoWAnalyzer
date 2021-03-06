import { formatPercentage } from 'common/format';
import SPELLS from 'common/SPELLS';
import UptimeIcon from 'interface/icons/Uptime';
import Analyzer from 'parser/core/Analyzer';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import React from 'react';

class ReverseEntropy extends Analyzer {
  get uptime() {
    return (
      this.selectedCombatant.getBuffUptime(SPELLS.REVERSE_ENTROPY_BUFF.id) /
      this.owner.fightDuration
    );
  }

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTalent(SPELLS.REVERSE_ENTROPY_TALENT.id);
  }

  statistic() {
    return (
      <Statistic category={STATISTIC_CATEGORY.TALENTS} size="small">
        <BoringSpellValueText spell={SPELLS.REVERSE_ENTROPY_TALENT}>
          <UptimeIcon /> {formatPercentage(this.uptime, 0)} % <small>uptime</small>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default ReverseEntropy;
