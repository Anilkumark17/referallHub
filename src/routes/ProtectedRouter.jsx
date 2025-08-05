import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../db/db";
const ProtectedRouter = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await db.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: listener } = db.auth.onAuthStateChange(() => {
      getUser();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRouter;