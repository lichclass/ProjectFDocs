

function Header(){

    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className='text-center py-16'>
                <h1 className='text-4xl font-bold'>BudgetWise Documents</h1>
                <br/>
                <p>
                    ProjectFDocs is a documentation site for BudgetWise. 
                    This site contains all the repository of all BudgetWise Documents.
                </p>
                <span className="text-sm">&copy; Copyright {currentYear}</span>
            </div>
        </>
    );
}

export default Header;
