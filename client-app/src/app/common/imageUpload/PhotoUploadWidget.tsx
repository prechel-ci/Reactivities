import { useEffect, useState } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import PhotoWidgetCropper from './PhotoWidgetCropper';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export default function PhotoUploadWidget({loading, uploadPhoto}: Props) {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    }, [files])

    return (
        <Grid>
            <Grid.Column width={4}>
                <Header sub color='teal' content='Schritt 1 - Foto hinzufügen' />
                <PhotoWidgetDropzone setFiles={setFiles} />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Schritt 2 - Größe anpassen' />
                {files && files.length > 0 && (
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                )}
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Schritt 3 - Vorschau & Upload' />
                {files && files.length > 0 && 
                <>
                    <div className='img-preview' style={{ minHeight: 200, overflow: 'hidden' }} />
                    <Button.Group widths={2}>
                        <Button loading={loading} onClick={onCrop} positive icon='check' />
                        <Button disable={loading} onClick={() => setFiles([])} icon='close' />
                    </Button.Group>
                </>}
            </Grid.Column>
        </Grid>
    )
}