import Header from "../components/Header"
import { InfoCard } from "../components/InfoCard";
import { CircleDecoration } from "../components/CircleDecoration";
import LogInWithWalletButton from "../components/LogInWithWalletButton"

import DeplanLogoSmall from './../assets/logoSmall.svg';
import DeplanCoinLogo from './../assets/DPLN_Coin logo.png';

import styles from './airdrop.module.scss'

const Airdrop = () => {
    return (
        <>
            <Header>
                <img src={DeplanLogoSmall} width={110} alt="Deplan Logo" />
                <LogInWithWalletButton />
            </Header>
            <CircleDecoration>
                <img src={DeplanCoinLogo} width={180} alt="Deplan logo" />
            </CircleDecoration>
            <div className={styles.content}>
                <span className={styles.title}>Spring $DPLN Airdrop</span>
                <div className={styles.descriptionContainer}>
                    <span className={styles.description}>We decided to support early adopters who held $DPLN tokens during Apr 1 - May 1, 2024 period.</span>
                </div>
                <InfoCard />
            </div>
        </>
    )
}

export default Airdrop
