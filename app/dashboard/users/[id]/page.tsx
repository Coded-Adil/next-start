// params is a Promise that resolves to an object with an id property of type string
// To user params in a server component, we should await it first by using async function

const UserDetails = async ({params }: {params: Promise <{id: string}>}) => {
    const {id} = await params;
    return (
        <div>
            <h1>Showing details for user #{id}</h1>
        </div>
    );
};

export default UserDetails;