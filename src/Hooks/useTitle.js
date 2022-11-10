const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title}-Tutor`;
    }, [title])
}

export default useTitle;