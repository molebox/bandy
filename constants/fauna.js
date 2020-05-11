// import * as React from "react";
// const faunadb = require("faunadb");
// const q = faunadb.query;

// export const FaunaContext = React.createContext();

// export const FaunaProvider = ({ children, faunaSecret }) => {
//     const fauna = React.useMemo(() => {
//       if (!faunaSecret) {
//         throw new Error(`No faunaSecret found, skipping client creation`);
//       }
//       const client = new faunadb.Client({
//         secret: faunaSecret
//       });
//       return { client, q };
//     }, [faunaSecret]);
//     return (
//       <FaunaContext.Provider value={fauna}>{children}</FaunaContext.Provider>
//     );
//   };

// export const useFaunaGetAll = (collectionIndex, limit) => {
//   const fauna = React.useContext(FaunaContext);
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   React.useEffect(() => {
//     const getAll = async () => {
//       setIsLoading(true);
//       try {
//         fauna.client
//           .query(
//             fauna.q.Map(
//               fauna.q.Paginate(fauna.q.Match(fauna.q.Index(collectionIndex)), {
//                 size: limit,
//               }),
//               fauna.q.Lambda(
//                 "ref",
//                 fauna.q.Select(["data"], fauna.q.Get(fauna.q.Var("ref")))
//               )
//             )
//           )
//           .then((result) => {
//             setResponse(result.data);
//             setIsLoading(false);
//           });
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     getAll();
//   }, [collectionIndex]);

//   return { response, error, isLoading };
// };

// export const useFaunaGetSingle = (collectionIndex, id) => {
//   const fauna = React.useContext(FaunaContext);
//   const { client, q } = fauna;
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   React.useEffect(() => {
//     const getSingle = async () => {
//       setIsLoading(true);
//       try {
//         client
//           .query(q.Get(q.Match(q.Index(collectionIndex), id)))
//           .then((result) => {
//             setResponse(result.data);
//             setIsLoading(false);
//           });
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     getSingle();
//   }, [id]);

//   return { response, error, isLoading };
// };

// export const useFaunaCreate = (collectionIndex, data, customId) => {
//   const fauna = React.useContext(FaunaContext);
//   const { client, q } = fauna;
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   React.useEffect(() => {
//     const create = async () => {
//       setIsLoading(true);
//       try {
//         customId
//           ? client
//               .query(
//                 q.Create(q.Ref(q.Collection(collectionIndex), customId), {
//                   data,
//                 })
//               )
//               .then((result) => {
//                 setResponse(result.data);
//                 setIsLoading(false);
//               })
//           : client
//               .query(
//                 q.Create(q.Collection(collectionIndex), {
//                   data,
//                 })
//               )
//               .then((result) => {
//                 setResponse(result.data);
//                 setIsLoading(false);
//               });
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     create();
//   }, []);

//   return { response, error, isLoading };
// };

// export const useFaunaUpdate = (collectionIndex, data, id) => {
//   const fauna = React.useContext(FaunaContext);
//   const { client, q } = fauna;
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   React.useEffect(() => {
//     const update = async () => {
//       setIsLoading(true);
//       try {
//         client
//           .query(
//             q.Update(
//               q.Ref(q.Collection(collectionIndex), id),
//               {
//                 data,
//               }
//             )
//           )
//           .then((result) => {
//             setResponse(result.data);
//             setIsLoading(false);
//           });
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     update();
//   }, [id]);

//   return { response, error, isLoading };
// };

// export const useFaunaReplace = (collectionIndex, data, id) => {
//   const fauna = React.useContext(FaunaContext);
//   const { client, q } = fauna;
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   React.useEffect(() => {
//     const replace = async () => {
//       setIsLoading(true);
//       try {
//         client
//           .query(
//             q.Replace(
//               q.Ref(q.Collection(collectionIndex), id),
//               {
//                 data,
//               }
//             )
//           )
//           .then((result) => {
//             setResponse(result.data);
//             setIsLoading(false);
//           });
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     replace();
//   }, [id]);

//   return { response, error, isLoading };
// };

// export const useFaunaDelete = (collectionIndex, id) => {
//   const fauna = React.useContext(FaunaContext);
//   const { client, q } = fauna;
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   React.useEffect(() => {
//     const deleteIndex = async () => {
//       setIsLoading(true);
//       try {
//         client
//           .query(
//             q.Delete(
//               q.Ref(q.Collection(collectionIndex), id)
//             )
//           )
//           .then((result) => {
//             setResponse(result.data);
//             setIsLoading(false);
//           });
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     deleteIndex();
//   }, [id]);

//   return { response, error, isLoading };
// };

// export const faunaBox = () => {

//   return {} ;
// };

// //   export const useFaunaCreateMultiple = (collectionIndex, data, placeholder, customId) => {
// //     const fauna = React.useContext(FaunaContext);
// //     const {client, q} = fauna;
// //     const [response, setResponse] = React.useState(null);
// //     const [error, setError] = React.useState(null);
// //     const [isLoading, setIsLoading] = React.useState(false);

// //     React.useEffect(() => {
// //       const create = async () => {
// //         setIsLoading(true);
// //         try {
// //           customId ? (
// //             client
// //             .query(
// //                 q.Create(q.Ref(q.Collection(collectionIndex), customId), {
// //                     data
// //                 })
// //             )
// //             .then(result => {
// //               setResponse(result.data);
// //               setIsLoading(false);
// //             })
// //           ) : (
// //             q.Map(
// //               data,
// //               q.Lambda(
// //                 placeholder,
// //                 q.Create(
// //                   q.Collection(collectionIndex),
// //                   { data: { title: q.Var(placeholder) } },
// //                 )
// //               ),
// //             )
// //             .then(result => {
// //               setResponse(result.data);
// //               setIsLoading(false);
// //             })
// //           )
// //         } catch (error) {
// //           setError(error)
// //         }
// //         setIsLoading(false);
// //       }
// //       create();
// //     }, [])

// //   return { response, error, isLoading };
// // }
