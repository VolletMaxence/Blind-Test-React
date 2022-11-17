import Anime from '../components/Anime';
import ConnectModal from '../components/ConnectModal';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const WaitingRoomBlindTest = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className="app-header">
                <ConnectModal/>
            </div>
            <div className='post-containers'></div>
        </div>
    );
};

export default WaitingRoomBlindTest;