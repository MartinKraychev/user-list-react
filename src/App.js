import { Footer } from "./components/common/Footer";
import { Form } from "./components/common/Form";
import { Header } from "./components/common/Header";
import { UserList } from "./components/user-components/UserList";

function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Form />
                    <UserList />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
