export default function Loading() {
    return (
        <div className="loading-container">
            <lord-icon
            src="https://cdn.lordicon.com/rqptwppx.json"
            trigger="loop"
            stroke="bold"
            state="loop-cycle"
            style={{width: "50vw", height: "80vh"}}
        ></lord-icon>
        </div>
    );
}
