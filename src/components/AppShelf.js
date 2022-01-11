import { PopUp } from "./popUp"
import { useState } from "react"

export const AppShelf = () => {


    const displayIdenifier = (name) => {
        console.log(`${name} was pressed`);
    }

    const [isFinder, setIsFinder] = useState(false);
 
    const displayNameFinder = () => {
      setIsFinder(!isFinder);
    }

    const leaveDisplayNameFinder = () => {
        setIsFinder(!isFinder);
    }




    const [isChrome, setIsChrome] = useState(false);
 
    const displayNameChrome = () => {
      setIsChrome(!isChrome);
    }

    const leaveDisplayNameChrome = () => {
        setIsChrome(!isChrome);
    }



    const [isTerminal, setIsTerminal] = useState(false);

    const displayNameTerminal = () => {
        setIsTerminal(!isTerminal);
    }
  
    const leaveDisplayNameTerminal = () => {
        setIsTerminal(!isTerminal);
    }



    const [isTrash, setIsTrash] = useState(false);
 
    const displayNameTrash = () => {
        setIsTrash(!isTrash);
    }
    
    const leaveDisplayNameTrash = () => {
        setIsChrome(!isTrash);
    }



    return (
        <div>
            <div className='appShelf'>

                {/* Applications and events */}

                <button className='deskAppFinder' 
                    onMouseOver={() => displayNameFinder('Finder')} 
                    onMouseLeave={() => leaveDisplayNameFinder('Finder')} 
                    onClick={() => displayIdenifier('Finder')}/>

                <button className='deskAppChrome' 
                    onMouseOver={() => displayNameChrome('Chrome')} 
                    onMouseLeave={() => leaveDisplayNameChrome('Chrome')} 
                    onClick={() => displayIdenifier('Chrome')}/>  

                <button className='deskAppTerminal' 
                    onMouseOver={() => displayNameTerminal('Terminal')} 
                    onMouseLeave={() => leaveDisplayNameTerminal('Terminal')} 
                    onClick={() => displayIdenifier('Terminal')}/>

                <button className='deskAppTrash' 
                    onMouseOver={() => displayNameTrash('Trash')} 
                    onMouseLeave={() => leaveDisplayNameTrash('Trash')} 
                    onClick={() => displayIdenifier('Trash')}/>  

                <div className='appDeskDivider'/>  
            </div>

                {/* Creating popup of application names */}

                {isFinder && <PopUp content={'Finder'}
                    handleClose={displayNameFinder}
                />}
                {isChrome && <PopUp content={'Chrome'}
                    handleClose={displayNameChrome}
                />}
                {isTerminal && <PopUp content={'Terminal'}
                    handleClose={displayNameTerminal}
                />}
                {isTrash && <PopUp content={'Trash'}
                    handleClose={displayNameTrash}
                />}
        </div>
    )
}

export default AppShelf