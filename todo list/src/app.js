const root = document.querySelector(".root");

const App = () => {
    const [aktivitas, setAktivitas] = React.useState("");
    const [halhal, setHalhal] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [pesan, setPesan] = React.useState("");

    const tambahFun = (e) => {
        e.preventDefault();

        if (aktivitas == "") {
            setPesan("kosong");
            return;
        }
        setPesan("");
        if (edit.key) {
            const newHal = {
                aktivitas,
                key: edit.key,
                done: false,
            };

            const cariIndex = halhal.findIndex((hal) => {
                return hal.key == newHal.key;
            });

            const cloneHalhal = [...halhal];
            cloneHalhal[cariIndex] = newHal;
            setHalhal(cloneHalhal);
            setAktivitas("");
            setEdit({});
            return;
        }

        setHalhal([
            ...halhal,
            {
                aktivitas,
                key: genereteKey(),
                done: false,
            },
        ]);
        setPesan("");
        setAktivitas("");
    };

    const genereteKey = () => {
        return Date.now();
    };

    const hapusFun = (key) => {
        const halhalBaru = halhal.filter((hal) => {
            if (hal.key != key) {
                return hal;
            }
        });
        setHalhal(halhalBaru);
        hapusEdit();
    };

    const editFun = (hal) => {
        setAktivitas(hal.aktivitas);
        setEdit(hal);
    };

    const hapusEdit = () => {
        setEdit({});
        setAktivitas("");
    };

    const checklistFun = (hal) => {
        const newHal = {
            aktivitas: hal.aktivitas,
            key: hal.key,
            done: hal.done ? false : true,
        };

        const cariIndex = halhal.findIndex((hal) => {
            return hal.key == newHal.key;
        });

        const cloneHalhal = [...halhal];
        cloneHalhal[cariIndex] = newHal;
        setHalhal(cloneHalhal);
        console.log(cloneHalhal);
        setAktivitas("");
        setEdit({});
        return;
    };

    return (
        <>
            <h1>Todo List</h1>
            {pesan ? <p style={{ color: "red" }}>Aktivitas tidak diisi kosong</p> : ""}
            <form action="" onSubmit={tambahFun}>
                <input type="text" placeholder="aktivitas mu.." onChange={(e) => setAktivitas(e.target.value)} value={aktivitas} />
                <button>{edit.key ? "ubah" : "tambah"}</button>
                {edit.key && <button onClick={hapusEdit}>hapus perubahan</button>}
            </form>
            {halhal.length > 0 ? (
                <ul>
                    {halhal.map((hal) => {
                        return (
                            <li key={hal.key}>
                                <input type="checkbox" onChange={checklistFun.bind(this, hal)} checked={hal.done} />
                                {hal.done ? <span style={{ textDecoration: "line-through" }}>{hal.aktivitas}</span> : <span>{hal.aktivitas}</span>}
                                <button onClick={editFun.bind(this, hal)}>edit</button>
                                <button onClick={hapusFun.bind(this, hal.key)}>hapus</button>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>tidak ada aktivitas</p>
            )}
        </>
    );
};

ReactDOM.render(<App />, root);
