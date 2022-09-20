import React from "react";

interface userProps {
    data: { name: string; age: number };
}

const User = ({ data }: userProps) => {
    return (
        <>
            <h2 className="text-center">
                Hello {data.name}({data.age})
            </h2>
            ;
        </>
    );
};

export default User;
