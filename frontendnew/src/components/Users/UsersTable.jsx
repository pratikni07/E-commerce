import React, { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import useSWR from "swr";
import { getAllUsers, getUserDetails } from "@/services/operations/authAPI";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UsersTables() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoadingUsers(true);
      try {
        const response = await getAllUsers();
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  const openViewModal = async (userId) => {
    onOpen(); // Open the modal
    try {
      const userDetails = await getUserDetails(userId);
      console.log(userDetails.user);
      setSelectedUser(userDetails.user);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const { data, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people?page=${page}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return users.length ? Math.ceil(users.length / rowsPerPage) : 0;
  }, [users.length, rowsPerPage]);

  const loadingState = isLoading || isLoadingUsers ? "loading" : "idle";

  return (
    <>
      <Table
        aria-label="Example table with client async pagination"
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn key="name">Name</TableColumn>
          <TableColumn key="email">Email</TableColumn>
          <TableColumn key="phone">Phone</TableColumn>
          <TableColumn key="role">Role</TableColumn>
          <TableColumn key="view">View</TableColumn>
        </TableHeader>
        <TableBody
          items={users.slice((page - 1) * rowsPerPage, page * rowsPerPage)}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item._id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phoneno}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>
                <Button
                  onClick={() => openViewModal(item._id)}
                  className="bg-[#242F66] text-white"
                >
                  View More
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedUser?.name || "User Details"}
              </ModalHeader>
              <ModalBody>
                {selectedUser ? (
                  <>
                    <p>
                      <strong>Email:</strong> {selectedUser.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {selectedUser.phoneno}
                    </p>
                    <p>
                      <strong>Role:</strong> {selectedUser.role}
                    </p>
                    {/* Add more user details as needed */}
                  </>
                ) : (
                  <Spinner />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
