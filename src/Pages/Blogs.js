import React from 'react';

const Blogs = () => {
    return (
        <section className='bg-base-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='border border-2 border-slate-500 radius m-3'>
                <h3 className='font-bold mb-2'>How will you improve the performance of a React application?</h3>
                <p>Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React.
                    Lazy loading images in React.</p>
            </div>
            <div className='border border-2 border-slate-500 radius m-3'>
                <h3 className='font-bold mb-2'>What are the different ways to manage a state in a React application?</h3>
                <p className=''>There are four main types of state you need to properly manage in your React apps:

                    <span>
                    <ul>
                        Local state.
                        Global state.
                        Server state.
                        URL state.
                    </ul>
                    </span>
                </p>
            </div>
            <div className='border border-2 border-slate-500 radius m-3'>
                <h3 className='font-bold mb-2'>How does prototypical inheritance work?</h3>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div className='border border-2 border-slate-500 radius m-3'>
                <h3 className='font-bold mb-2'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.</p>
            </div>
            <div className='border border-2 border-slate-500 radius m-3'>
                <h3 className='font-bold mb-2'>What is a unit test? Why should write unit tests?</h3>
                <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
            </div>
        </section>
    );
};

export default Blogs;