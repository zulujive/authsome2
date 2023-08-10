import { useEffect } from 'react';

function Title(props) {
    useEffect(() => {
      document.title = props.title
    }, [props.title])
}

export default Title;