import { useState } from 'react';

export default function useInput(storageKey) {
    const [get, set] = useState(localStorage[storageKey]);
    let json;
        try { json = JSON.parse(localStorage[storageKey]); }
        catch { json = []; }

    const [getJson, setJson] = useState(json);

    const input = {
        onChange: (e) => {
            set(e.target.value);

            try {
                setJson(JSON.parse(e.target.value));
                localStorage[storageKey] = e.target.value;
            } catch {}
        },
        value: get,
    };

    return [getJson, input];
}