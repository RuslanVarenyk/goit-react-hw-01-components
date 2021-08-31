import PropTypes, { number, shape, string } from 'prop-types';
import styles from './statistics.module.css'

function Statistics({stats}) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>

            <ul className={styles.statsList}>
            {stats.map(data => 
                <li className={styles.item}>
                    { data.label ? <span className={styles.label}>{data.label} </span>: <span></span>}
                < span className={styles.percentage}>{data.percentage}%</span>
                </li>
            )}
        </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
    stats: PropTypes.arrayOf(shape({
        label: string.isRequired,
        percentage: number.isRequired,
    })),
}