
export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" />
                <br />

                <label htmlFor="message">Message:</label>
                <br />
                <textarea id="message" name="message" rows={4} />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}