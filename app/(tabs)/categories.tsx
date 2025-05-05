// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {useRouter} from "expo-router";
// import { logOut} from "@/store/slices/userSlice";
import {useAppDispatch, useAppSelector} from "@/store";
import AppLogo from "@/components/AppLogo";
// import {removeFromSecureStore} from "@/utils/secureStore";
import {useGetCategoriesQuery} from "@/services/categoryService";
import LoadingOverlay from "@/components/LoadingOverlay";
import CategoryCard from "@/components/category/CategoryCard";


const CategoriesScreen = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    // const user = useAppSelector((state) => state.user.user);
    const token = useAppSelector((state) => state.user.token);

    console.log("token--", token);
    // const { data, isLoading, error } = useGetCategoriesQuery(token);
    const {data: categories, isLoading, error} = useGetCategoriesQuery(token);

    // console.log("data", data);
    console.log("data", categories);
    console.log("error", error);

    // const handleLogout = async () => {
    //     await removeFromSecureStore("authToken");
    //
    //     dispatch(logOut());
    //     router.replace("/login");
    // };

    return (
        // <View style={styles.container}>
        //     <AppLogo />
        //
        //     <Text style={styles.title}>Інформація про користувача:</Text>
        //     {user ? (
        //         <>
        //             <Text>Email: {user.email}</Text>
        //             {/*<Text>Ім’я: {user.name}</Text>*/}
        //             {/*<Text>Роль: {user.roles.join(', ')}</Text>*/}
        //
        //             <TouchableOpacity
        //                 onPress={handleLogout}
        //                 style={styles.logoutButton}
        //             >
        //                 <Text style={styles.logoutText}>Вийти</Text>
        //             </TouchableOpacity>
        //         </>
        //     ) : (
        //         <Text>Завантаження даних...</Text>

        <View>
            <Text style={styles.title}>Категорії</Text>
            <LoadingOverlay visible={isLoading} />
            {categories && (
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ gap: 10, paddingBottom: 200 }}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View className="w-[49%] pb-5">
                            <CategoryCard category={item} />
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    // container: { flex: 1, justifyContent: "center", padding: 20 },
    // title: { fontSize: 20, marginBottom: 15, fontWeight: "bold" },
    // logoutButton: {
    //     marginTop: 30,
    //     padding: 12,
    //     backgroundColor: "#ff4d4d",
    //     borderRadius: 8,
    //     alignItems: "center",
    // },
    // logoutText: { color: "white", fontWeight: "bold" },

    title: {fontSize: 20, marginBottom: 15, marginTop: 50, textAlign: "center", fontWeight: "bold"},
});

export default CategoriesScreen;