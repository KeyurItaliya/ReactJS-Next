import axios from "axios";

export const resolvers = {
    Query: {
        getProduct: async () => {
            try {
                const users = await axios.get("http://localhost:8080/shop-api");
                return users.data.map(({ id, login, avatar_url }) => ({
                    id,
                    login,
                    avatar_url
                }));
            } catch (error) {
                throw error;
            }
        },
        getProducts: async (_, args) => {
            try {
                const user = await axios.get(
                    `http://localhost:8080/shop-api/${args.name}`
                );
                return {
                    id: user.data.id,
                    name: user.data.name
                };
            } catch (error) {
                throw error;
            }
        }
    }
};