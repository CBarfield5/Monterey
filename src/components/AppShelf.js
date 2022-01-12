import { PopUp } from "./popUp"
import { useState } from "react"
import { chrome } from './chromeBrowser'

export const AppShelf = () => {


    const displayIdenifier = (name) => {
        console.log(`${name} was pressed`);
    }

    const [isFinder, setIsFinder] = useState(false);
    const [isChrome, setIsChrome] = useState(false);
    const [isTerminal, setIsTerminal] = useState(false);
    const [isTrash, setIsTrash] = useState(false);

    {/*Nested block please fix */}

    const displayName = (name) => {
        {name === 'Finder' && setIsFinder(!isFinder)};
        {name === 'Chrome' && setIsChrome(!isChrome)};
        {name === 'Terminal' && setIsTerminal(!isTerminal)};
        {name === 'Trash' && setIsTrash(!isTrash)};
    }

    const leaveDisplayName = (name) => {
        {name === 'Finder' && setIsFinder(!isFinder)};
        {name === 'Chrome' && setIsChrome(!isChrome)};
        {name === 'Terminal' && setIsTerminal(!isTerminal)};
        {name === 'Trash' && setIsTrash(!isTrash)};
    }



    return (
        <div>
            <div className='appShelf'>

                {/* Applications and events */}

                <button className='deskAppFinder' 
                    onMouseOver={() => displayName('Finder')} 
                    onMouseLeave={() => leaveDisplayName('Finder')} 
                    onClick={() => displayIdenifier('Finder')}/>

                <button className='deskAppChrome' 
                    onMouseOver={() => displayName('Chrome')} 
                    onMouseLeave={() => leaveDisplayName('Chrome')} 
                    onClick={() => displayIdenifier('Chrome')}/>  

                <button className='deskAppTerminal' 
                    onMouseOver={() => displayName('Terminal')} 
                    onMouseLeave={() => leaveDisplayName('Terminal')} 
                    onClick={() => displayIdenifier('Terminal')}/>

                <button className='deskAppTrash' 
                    onMouseOver={() => displayName('Trash')} 
                    onMouseLeave={() => leaveDisplayName('Trash')} 
                    onClick={() => displayIdenifier('Trash')}/>  

                <div className='appDeskDivider'/>  
            </div>

                {/* Creating popup of application names */}

                {isFinder && <PopUp content={'Finder'}
                    handleClose={displayName}
                />}
                {isChrome && <PopUp content={'Chrome'}
                    handleClose={displayName}
                />}
                {isTerminal && <PopUp content={'Terminal'}
                    handleClose={displayName}
                />}
                {isTrash && <PopUp content={'Trash'}
                    handleClose={displayName}
                />}
        </div>
    )
}

export default AppShelf