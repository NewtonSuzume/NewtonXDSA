

export function ItemText({title, children} : {title: string, children: string}) {
    return (
        <div className="w-full p-9 flex flex-col dark:bg-neutral-800 bg-neutral-200 align-center w-96 rounded-xl">
            <h1 className='text-4xl font-bold mb-5'>{title}</h1>
            <p className='text-lg'>
                {children}
            </p>
        </div>
    )

}