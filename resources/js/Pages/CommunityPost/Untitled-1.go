 <div>
                            {data?.communityPost.map((post) => (
                                <div className="card-list" key={post.id}>
                                    <h1
                                        className="text-2xl font-semibold font-nunito"
                                        style={{ color: "#012970" }}
                                    >
                                        {post.title}
                                    </h1>
                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-5 lg:flex md:block">
                                        <div className="w-56 h-56 mt-5 lg:ml-6 lg:flex">
                                            <div className="flex-none">
                                                {post.category_id == "1" && (
                                                    <img
                                                        src="uploads/homeicon4.png"
                                                        alt="Image 1"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                                {post.category_id == "2" && (
                                                    <img
                                                        src="uploads/homeicon3.png"
                                                        alt="Image 2"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                                {post.category_id == "3" && (
                                                    <img
                                                        src="uploads/homeicon2.png"
                                                        alt="Image 3"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                                {post.category_id == "4" && (
                                                    <img
                                                        src="uploads/homeicon5.png"
                                                        alt="Image 4"
                                                        className="w-full h-full"
                                                    />
                                                )}
                                            </div>
                                            <div className="block w-full">
                                                <div className="flex lg:ml-7 mt-1">
                                                    <FaRegUserCircle
                                                        className="card-list-default-userProfile w-10 h-10"
                                                        style={{
                                                            color: "#012970",
                                                        }}
                                                    />
                                                    <h1 className="ml-2 text-xl">
                                                        User
                                                    </h1>
                                                </div>
                                                <div
                                                    className="flex lg:ml-7 mt-7"
                                                    style={{
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    <div className="w-10 h-10 flex-none">
                                                        <TfiLocationPin
                                                            className="w-full h-full"
                                                            style={{
                                                                color: "#012970",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex">
                                                        <p className="ml-2 text-xl w-full">
                                                            {post.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                width:
                                                    window.innerWidth > 768
                                                        ? "1000px"
                                                        : "",
                                                marginLeft:
                                                    window.innerWidth > 768
                                                        ? "250px"
                                                        : "",
                                                marginTop:
                                                    window.innerWidth > 768
                                                        ? "20px"
                                                        : "160px",
                                            }}
                                            className="flex"
                                        >
                                            <div className="w-10 h-10 flex-none">
                                                <BiMessageError
                                                    className="w-full h-full"
                                                    style={{ color: "#012970" }}
                                                />
                                            </div>
                                            <div
                                                style={{ flex: 1 }}
                                                className="ml-3"
                                            >
                                                {post.description}
                                            </div>
                                        </div>
                                        <div
                                            className="lg:ml-auto md:mt-5"
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                marginTop: "20px",
                                            }}
                                        >
                                            <button
                                                onClick={() => showPost(post)}
                                                className="w-40 h-30 text-black text-xl p-2 rounded-md border shadow-xl border-gray-300 text-white bg-blue-900 hover:bg-yellow-500 transition duration-300"
                                            >
                                                View
                                            </button>
                                            <a
                                                href={`tel:+91 ${post?.mobile}`}
                                                className="flex justify-center items-center w-40 h-30 mt-4 text-black text-xl p-2 rounded-md border shadow-xl border-gray-300 text-white bg-blue-900 hover:bg-yellow-500 transition duration-300"
                                            >
                                                Call
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>