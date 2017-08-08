import * as React from 'karet';
import * as U from 'karet.util';

import './title-card.css';

//

const TitleCard = ({ title, subtitle, className }) =>
  <article className={U.cns(className, 'title-card__component')}>
    <header>
      <h3>{title}</h3>
    </header>
    <p>{subtitle}</p>
  </article>;

export default TitleCard;
