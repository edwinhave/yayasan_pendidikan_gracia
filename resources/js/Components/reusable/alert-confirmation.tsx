import React from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";
import { CircleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface AlertConfirmationProps {
    openConfirmation: boolean;
    setOpenConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
    alertConfirmationText: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    description?: string | React.ReactNode;
    isLoading?: boolean;
    textConfirm?: string;
    textCancel?: string;
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link";
    descriptionClassName?: string;
}

const AlertConfirmation: React.FC<AlertConfirmationProps> = ({
    openConfirmation,
    setOpenConfirmation,
    alertConfirmationText,
    onConfirm,
    onCancel,
    description,
    isLoading,
    textConfirm,
    textCancel,
    variant,
    descriptionClassName,
}) => {
    return (
        <AlertDialog open={openConfirmation} onOpenChange={setOpenConfirmation}>
            <AlertDialogContent>
                <AlertDialogHeader className="pt-10">
                    <div className="flex justify-center">
                        <CircleAlert
                            className="text-warning"
                            style={{ width: "32px", height: "32px" }}
                        />
                    </div>
                    <AlertDialogTitle className="text-center pt-1">
                        {alertConfirmationText}
                    </AlertDialogTitle>
                    <AlertDialogDescription
                        className={cn("text-center", descriptionClassName)}
                        aria-description="alert-confirmation"
                    >
                        {description}
                    </AlertDialogDescription>
                    <div className="pt-5 gap-2 flex align-middle justify-center">
                        <Button
                            onClick={onConfirm}
                            id="button-save-confirm"
                            disabled={isLoading}
                            variant={variant ?? "default"}
                        >
                            {textConfirm ?? "Save"}
                        </Button>
                        <Button
                            onClick={onCancel}
                            variant="outline"
                            disabled={isLoading}
                        >
                            {textCancel ?? "Cancel"}
                        </Button>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertConfirmation;
