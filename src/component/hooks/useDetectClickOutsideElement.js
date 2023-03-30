import { useEffect } from 'react';

function useOutsideDetector(ref, updater, func) {

    useEffect(() => {

        function handleClickOutside(event) {

            if (ref.current && !ref.current.contains(event.target)) {

                func(event);

                document.removeEventListener('click', handleClickOutside);

            }

        }

        document.addEventListener('click', handleClickOutside);

        return () => {

            document.removeEventListener('click', handleClickOutside);

        };

    }, [ref, updater]);

}

export default useOutsideDetector;
