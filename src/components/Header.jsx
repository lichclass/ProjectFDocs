function Header(){

    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className='text-center py-20'>
                <h1 className='text-4xl font-bold'>Project-F Documents</h1>
                <br/>
                <p>
                    ProjectFDocs is a documentation site for Project-F. 
                    This site contains all the repository of all Project-F Documents.
                </p>
                <span className="text-sm">&copy; Copyright {currentYear}</span>
            </div>
        </>
    );
}

export default Header;
